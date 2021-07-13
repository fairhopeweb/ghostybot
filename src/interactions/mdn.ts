import { CommandInteraction, MessageEmbed } from "discord.js";
import Bot from "structures/Bot";
import Interaction from "structures/Interaction";

export default class DocsInteraction extends Interaction {
  constructor(bot: Bot) {
    super(bot, {
      name: "docs",
      description: "Find something on the MDN Web Docs.",
      options: [
        {
          name: "query",
          description: "What do you want to search for",
          type: "STRING",
          required: true,
        },
      ],
    });
  }

  async execute(interaction: CommandInteraction, args: string[]) {
    const lang = await this.bot.utils.getGuildLang(interaction.guildId!);

    try {
      const [query] = args;

      const url = `https://mdn.gideonbot.com/embed?q=${query}`;
      const data = await fetch(url).then((res) => res.json());

      if (!data || data?.message || data?.code) {
        return interaction.reply({ content: lang.UTIL.MDN_NOT_FOUND });
      }

      const embed = new MessageEmbed({
        ...data,
        color: "#5865f2",
        footer: {
          text: interaction.user.username,
          icon_url: interaction.user?.displayAvatarURL({ dynamic: true }),
        },
      });

      return interaction.reply({ embeds: [embed] });
    } catch (err) {
      this.bot.utils.sendErrorLog(err, "error");
      return interaction.reply({ content: lang.GLOBAL.ERROR });
    }
  }
}