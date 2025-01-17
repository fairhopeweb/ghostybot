import * as DJS from "discord.js";
import wd from "word-definition";
import { Bot } from "structures/Bot";
import { SubCommand } from "structures/Command/SubCommand";

export default class DefineCommand extends SubCommand {
  constructor(bot: Bot) {
    super(bot, {
      commandName: "util",
      name: "define",
      description: "Define something",
      options: [
        {
          name: "word",
          required: true,
          description: "The word you want to get defined",
          type: "STRING",
        },
      ],
    });
  }

  async execute(
    interaction: DJS.CommandInteraction<"cached">,
    lang: typeof import("@locales/english").default,
  ) {
    const word = interaction.options.getString("word", true);

    wd.getDef(word.toLowerCase(), "en", null, (data) => {
      if (data.err) {
        interaction.reply({
          ephemeral: true,
          content: this.bot.utils.translate(lang.UTIL.NO_DEF_FOUND, { word }),
        });
      } else {
        const embed = this.bot.utils
          .baseEmbed(interaction)
          .setTitle(this.bot.utils.translate(lang.UTIL.DEF_FOR_WORD, { word }))
          .addField(lang.UTIL.CATEGORY, data.category)
          .addField(lang.UTIL.DEFINITION, data.definition);

        interaction.reply({ embeds: [embed] });
      }
    });
  }
}
