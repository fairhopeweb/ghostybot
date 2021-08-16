const LANG: typeof import("./english").default = {
  GLOBAL: {
    EVERYONE: "Everyone",
    NOT_SPECIFIED: "No especificado",
    ERROR: "Ha ocurrido un error",
    NAME: "Nombre",
    SUCCESS: "Exito",
    REASON: "Razón",
    URL: "URL",
    NONE: "None",
    YES: "Si",
    NO: "No",
  },
  GUILD: {
    NOT_FOUND: "Gremio no encontrado",
    LEFT: "Ha abandonado el gremio **${guild_name}**",
    OWNER: "Dueño del gremio",
    CHANNEL_C: "Numero de canales",
    EMOJI_C: "Numero de emojis",
    ROLES_C: "Numero de roles",
    MEMBER_C: "Numero de miembros",
    REGION: "Region",
    VERIFICATION: "Nivel de verificacíon",
    MFA: "Nivel MFA",
  },
  MEMBER: {
    TAG: "Tag",
    ROLES: "Roles",
    BADGES: "Insignias",
    ONLINE: "Conectado",
    OFFLINE: "Desconectado",
    STATUS: "Estado",
    CREATED_ON: "Creada en",
    JOINED_AT: "Entró en",
    NICKNAME: "Apodo",
    NOT_FOUND: "Miembro no encontrado",
    CANNOT_BE_BANNED: "Ese miembro no puede ser baneado",
    DM_BAN_MESSAGE: "Has sido **baneado** de **{guild_name}**, Razón: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} Ha sido baneado de este servidor. Razón: **{ban_reason}**. Tambien le he enviado un DM al usuario para hacerle saber.",
    BOT_DATA: "Datos del bot no guardados, por lo tanto no puedo buscar esa informacion",
    PERMISSIONS: "Permissions",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Mi rol no es mas alto que el rol **{role}**!",
    MY_ROLE_MUST_BE_HIGHER:
      "Mi rol debe ser mas alto que el rol mas alto del usuario **{member}**!",
    ALREADY_HAS_ROLE: "El miembro ya tiene ese rol",
    ADDED_ROLE_TO: "Se le ha añadido el rol **{role}** a {member}",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Click aqui si la imagen falla en cargar.]",
    CLYDE: "Clyde",
    CUDDLES: "abrazos con",
    FEEDED: "Alimentado",
    HUGGED: "Abrazado",
    PATTED: "Palmeado",
    KISSED: "Besadi",
    POKED: "Empujado",
    SLAPPED: "Abofeteado",
    NO_GIPHY_KEY:
      "La api de giphy no fue encontrada en la configuración (Contacta con el dueño del bot)",
    NO_GPIHY_FOUND: "No gifs were found with that",
  },
  BOT_OWNER: {
    EVAL: "Comando de Eval",
    EVAL_TYPE: "Tipo",
    EVAL_INPUT: "Entrada",
    EVAL_OUTPUT: "Salida",
    CANNOT_BL_OWNER: "No puedes poner en lista negra al dueño",
    CANNOT_BL_BOT: "El bot no puede ser añadido a la lista negra",
    NOT_BLD: "Usuario no esta en lista negra",
    ALREADY_BLD: "{member} ya esta en lista negra",
    NOT_OPTION: "**{type}** no es una opcion",
    BLACKLISTED: "En lista negra",
    UNBLACKLISTED: "No incluido en la lista negra",
    BLACKLISTED_SUCCESS: "{member} fue {type}",
  },
  LEVELS: {
    XP: "XP",
    LEVEL: "Nivel",
    LEADERBOARD: "Tabla de clasificación",
    GIVE_XP_SUCCESS: "Se le ha dado a **{member}** **{amount}** de XP",
    TOTAL_XP: "Total XP",
    NEW_LEVEL: "New level",
    LEVEL_UP: "Level Up!",
    REMOVED_XP: "Successfully removed **{amount}**XP from **{userTag}**",
  },
  PERMISSIONS: {
    CREATE_INSTANT_INVITE: "Create invites",
    KICK_MEMBERS: "Kick members",
    BAN_MEMBERS: "Ban members",
    ADMINISTRATOR: "Administrator",
    MANAGE_CHANNELS: "Manage channels",
    MANAGE_GUILD: "Manage server",
    ADD_REACTIONS: "Add reactions",
    VIEW_AUDIT_LOG: "View audit logs",
    PRIORITY_SPEAKER: "Use Priority speaker",
    STREAM: "Go live",
    VIEW_CHANNEL: "View channel",
    SEND_MESSAGES: "Send messages",
    SEND_TTS_MESSAGES: "Send TTS-messages",
    MANAGE_MESSAGES: "Manage messages",
    EMBED_LINKS: "Embed links",
    ATTACH_FILES: "Attach files",
    READ_MESSAGE_HISTORY: "Read message history",
    MENTION_EVERYONE: "Mention everyone",
    USE_EXTERNAL_EMOJIS: "Use external emojis",
    VIEW_GUILD_INSIGHTS: "View server insights",
    CONNECT: "Join voice",
    SPEAK: "Speak in voice",
    MUTE_MEMBERS: "Mute members",
    DEAFEN_MEMBERS: "Deafen members",
    MOVE_MEMBERS: "Move members",
    USE_VAD: "Use voice activity detection",
    CHANGE_NICKNAME: "Change nickname",
    MANAGE_NICKNAMES: "Manage nicknames",
    MANAGE_ROLES: "Manage roles",
    MANAGE_WEBHOOKS: "Manage webhooks",
    MANAGE_EMOJIS: "Manage emojis",
    REQUEST_TO_SPEAK: "Request to speak",
    USE_APPLICATION_COMMANDS: "Use application commands",
    STAGE_MODERATOR: "Stage Moderator",
    MANAGE_EMOJIS_AND_STICKERS: "Manage emojis and stickers",
    MANAGE_THREADS: "Manage threads",
    USE_PUBLIC_THREADS: "Use public threads",
    USE_PRIVATE_THREADS: "Use private threads",
    USE_EXTERNAL_STICKERS: "Use external stickers",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Necesitas estar en un canal de voz",
    BOT_NOT_IN_VC: "Bot is not in this voice channel!",
    NO_QUEUE: "No hay canciones sonando ahora",
    QUEUE_CLEARED: "La cola se ha vaciado",
    QUEUE: "Cola de canciones",
    BETWEEN_0_100: "El volumen debe estar entre 0 y 100",
    BETWEEN_1_TOTALQUEUE: "Use a track number between 1 and {totalQueue}",
    REMOVE_SUCCESS: "has been removed from the queue",
    VOL_SUCCESS: "Se ha establecido el volumen a {vol}%",
    PLAYING: "Reproduciendo",
    PAUSED: "Pausado",
    DURATION: "Duración",
    ADDED_TO_QUEUE: "{song} ha sido añadida a la cola",
    ADDED_TO_QUEUE2: "Song has been added to the queue",
    ADDED_PL_TO_QUEUE: "Playlist: {name} was added to queue ({length} songs)",
    NOW_PLAYING: "Sonando ahora:",
    REQUESTED_BY: "Pedida por: {user}",
    NO_PERMS: "No tengo los permisos correctos para ese canal de voz!",
    NO_RESULTS: "Ninguna cancion fue encontrada",
    SUC_REM_FILTER: "Successfully removed {filter}",
    SUC_APPLIED_FILTER: "Successfully applied {filter}",
    FILTER_NOT_FOUND: "That filter was not found",
    FILTER_ALREADY_ENABLED: "Filter `{filter}` is already enabled",
    FILTER_NOT_ENABLED: "Filter `{filter}` is not enabled?",
    NOT_VALID_OPTION: "{option} Is not a valid option `set`, `remove`",
    NO_LIRYCS: "No lyrics found for {songTitle}.",
    NOW: "Now",
    MUSIC_STARTING: "The music is starting. Please wait a few seconds..",
    INFORMATION: "Information",
    UPLOADER: "Uploader",
    LIKES: "Likes",
    ERRORS: {
      LIVE_NOT_SUPPORTED: "Live videos are not supported",
      JOIN_ERROR: "There was an error joining the voice channel, make sure it's not full!",
      NO_RESULT: "No songs were found.",
      VOICE_FULL: "That voice channel is full.",
      NO_QUEUE: "There's no music playing.",
      NO_PREVIOUS: "There is no previous song in the queue.",
      NO_UP_NEXT: "There is no next song in the queue.",
      UNAVAILABLE_VIDEO: "That video/playlist seems to be unavailable.",
      NOT_SUPPORTED_URL: "That URL is not supported.",
      NON_NSFW: "Cannot play age-restricted content in non-NSFW channel.",
      UNPLAYABLE_FORMATS: "That format cannot be used.",
      NO_SONG_POSITION: "There isn't a song at this position in the queue.",
      EMPTY_PLAYLIST: "There isn't a valid song in the playlist",
    },
  },
  ECONOMY: {
    MONEY: "Dinero",
    BANK: "Banco",
    BALANCE: "Balance",
    DAILY_ERROR: "Вы уже забрали свой ежедневный бонус! Возвращайтесь {time}",
    WEEKLY_ERROR: "Вы уже забрали свой еженедельный бонус! Возвращайтесь {time}",
    DAILY_SUCCESS: "Has recolectado tu premio diario de **{amount}** monedas",
    WEEKLY_SUCCESS: "Has recolectado tu premio semanal de **{amount}** monedas",
    STORE_EMPTY:
      "There are no items in the store! Ask an admin to add items to the store via the dashboard.",
    PROVIDE_ITEM_TO_BUY: "Proporciona el item para comprar",
    NOT_ENOUGH_MONEY: "No tienes suficiente dinero",
    BUY_SUCCESS: "Has comprado **{item}** pagado **{price}**",
    NOT_FOUND_STORE: "**{query}** wasn't found in the store.",
    ALREADY_OWN_ITEM: "Ya tienes ese item",
    DEPOSITED_ALL: "Has depositado todo el dinero!",
    DEPOSITED_AMOUNT: "Has depositado **{amount} Monedas**",
    WITHDRAW_ALL: "Has retirado todo el dinero!",
    WITHDRAW_AMOUNT: "Has retirado **{amount} Monedas**",
    PROFILE: "Perfil",
    INV_EMPTY: "El inventario del usuario esta vacio",
    INVENTORY: "Inventario",
    INV_ITEMS: "Inventario de items",
    VIEW_INVENTORY: "Usa `{prefix}inventory <usuario>` Para su inventario de items.",
    MONEY_LEADERBOARD: "Tabla de clasificación de dinero",
    TOTAL_BALANCE: "Balance total",
    BOTH_COUNTED: "Dinero de banco y bolsillo contados",
    DICE_LANDED: "Ha caido un: {roll}",
    DICE_WON: "Felicidades! has ganado un premio de **{price} Monedas**",
    DICE_LOST: "Necesitas que caiga un **6** para obtener un premio de **{price} Monedas**",
    RECENTLY_WORKED: "Ya has trabajado recientemente, {time} restante",
    WORKED: "{member} trabajó de **{job_name}** y obtuvo **{amount}**!",
    CANNOT_PAY_SELF: "No te puedes pagar a ti mismo",
    PAY_SUCCESS: "Has dado a **{member}** **{amount} Monedas**",
    CANNOT_ROB_SELF: "No te puedes robar a ti mismo!",
    BETWEEN_1_1000: "La cantidad debe estar entre 1 y 1000",
    MEMBER_NO_MONEY: "El usuario no tiene ese dinero, por lo tanto no lo puedes robar.",
    ROB_SUCCESS: "Has robado una cantidad de **{amount} Monedas** a **{member}**",
    STORE: "Tienda",
    MANAGE_STORE_PERMS:
      "No tienes los permisos correctos para manejar la tienda! (Administrar servidor)",
    PROVIDE_VALID_ITEM: "Por favor proporciona un item para Añadir/remover!",
    PRICE: "Precio",
    ALREADY_EXISTS: "**{item}** ya existe en la tienda!",
    PROVIDE_PRICE: "Por favor proporciona un precio para el item!",
    MUST_BE_NUMBER: "El precio debe ser un numero!",
    ADDED_TO_STORE: "{item} fue añadido en el a la tienda!",
    NOT_IN_STORE: "**{item}** no existe en la tienda!",
    REMOVED_FROM_STORE: "{item} fue removido de la tienda!",
    WON_SLOTS: "Has ganado y obtuviste {amount} monedas",
    LOST_SLOTS: "Has perdido!",
    MAX_BET: "Apuesta maxima es 500",
    ADDED_MONEY: "Successfully added {amount} to user balance",
    MIN_BET: "Minimum bet of 1 is required",
    MIN_AMOUNT: "Amount must be above 0",
    RESET_CONF: "Reset all balance? y/n",
    RESET_SUCCESS: "Successfully reset everyone's balance",
    RESET_CANCEL: "reset-economy was canceled",
    PROVIDE_AMOUNT: "Please provide an amount to withdraw",
    NO_MONEY: "You don't have that much money in your bank!",
    WORK: "Work!",
    REMOVED_MONEY: "Successfully removed {amount} from user balance",
    ALREADY_WORKED: "You have already worked recently. Check back {time}",
  },
  GAMES: {
    BETS_ON: "{member_1} Apostó a {member_2}",
    LOST_BET: "{member_1} Apostó a {member_2}!\n {member_1} No gano la apuesta",
    WON_BET: "{member_1} Apostó a {member_2} y {member_1} gano la apuesta!",
    CALC: "Calculadora",
    INVALID_CALC: "Calculación invalida",
    COMPLIMENT: "Cumplido",
    LANDED_TAILS: "Ha caido cara",
    LANDED_HEADS: "Ha caido sello",
    HAPPINESS: "Felicidas",
    IQ_TEST: "Test de IQ",
    IQ_IS: "Tu IQ es de: {iq}",
    RPS: "Piedra Papel Tijeras",
    ROCK: "Piedra",
    PAPER: "Papel",
    SCISSORS: "Tijeras",
    WYR: "¿Que prefieres?",
    ANSWER: "Respuesta",
    QUESTION: "Pregunta",
    YOU_WON: "Has ganado 50 monedas!",
    BOT_WON: "El bot ha ganado!",
    BOTH_WON: "It's a tie",
    OPPONENTS_CHOICE: "Opponents choice",
    YOUR_CHOICE: "Your choice",
    WINNER: "Winner",
    INVALID_INPUT: "Input must be 1 of the following:",
    QUOTE: "Quote",
    TAGS: "Tags",
    VOTES: "Votes",
    WYR_QUESTIONS: "{question1} **OR** {question2}",
  },
  UTIL: {
    TEXT_NOT_SUP: "That text is not supported",
    AVATAR: "Avatar",
    NOT_AFK: "Ya no estas AFK",
    AFK: "Ahora esta ADK",
    BMI_WEIGHT: "Peso",
    BMI_HEIGHT: "Altura",
    BMI: "BMI",
    SUPPORT_SERVER: "Apoya el servidor",
    BUG_REPORT: "{member} ha reportado un bug",
    BUG_REPORTED: "Bug reportado ha sido enviado!",
    CHANNEL_TOPIC: "Tema del canal",
    NO_DEF_FOUND: "Definición no encontrada para {word}",
    DEF_FOR_WORD: "Definición de {word}",
    CATEGORY: "Categoria",
    DEFINITION: "Definición",
    ANIMATED: "Animado",
    NON_ANIMATED: "No animado",
    NEW_FEEDBACK: "Nuevos comentarios",
    FEEDBACK_SEND: "Se ha enviado el comentario!",
    GH_NOT_FOUND: "Cuenta de GitHub no encontrada",
    GH_FOLLOWING: "Siguiendo",
    GH_FOLLOWERS: "Seguidores",
    GH_WEBSITE: "Sitio web",
    GH_LOCATION: "Ubicacion",
    GH_BIO: "Biografia",
    DB_RATINGS: "Calificaciones",
    DB_COUNTRY: "Pais",
    DB_GENRES: "Genero",
    DB_AWARDS: "Premios",
    DB_LANGS: "Lenguajes",
    POPULATION: "Population",
    DB_RELEASED: "Liberada",
    DB_NOT_FOUND: "No fue encontrado nada con {search}",
    PLAYERS: "Jugadores",
    VERSION: "Version",
    PORT: "Port",
    DESCRIPTION: "Descripción",
    NPM_NOT_FOUND: "No NPM packages were found with **{query}**",
    MC_NOT_FOUND: "Servidor no fue encontrado",
    NPM_SEARCH: "Busqueda de NPM",
    NPM_TOP_5: "Top 5 de resultados para **{query}**",
    AUTHOR: "Autor",
    VIEW_ON_NPM: "ver en npm",
    MAX_PLAYERS: "Maximo de jugadores",
    PS_NOT_FOUND: "Aplicacion no encontrada",
    DEVELOPER: "Desarrollador",
    SCORE: "Puntaje",
    CREATED_BY: "Creado por {member}",
    MENTIONABLE: "Mencionable",
    POSITION: "Position (from top)",
    ROLE_NOT_FOUND: "Role no encontrado",
    ROLES: "Roles",
    NO_GUILD_ICON: "Este gremio no tiene icono",
    ENLARGED_EMOJI: "Version ampliada de {emoji}",
    INVALID_EMOJI: "Emoji invalido!",
    SKIN_NOT_FOUND: "Jugador `{search}` no fue encontrado!",
    SKIN_NAME: "Skin del jugador {name}",
    DOWNLOAD_SKIN: "[Descargar skin]",
    G_TRANSLATE: "Traducción de Google",
    NEW_SUGGESTION: "Nueva sugerencia",
    NO_SUGG_CHANNEL:
      "Tu servidor no tiene un canal de sugerencias!\n Usa `set suggest-channel <Mencion del canal>` Para establecer un canal por defecto.",
    UPTIME: "{member} ha estado activo por {time}",
    BOT_UPTIME: "Bot has been up since: {botUpSince}",
    WEATHER: "Clima",
    C_NOT_FOUND: "Ciudad: **{query}** no fue encontrada!",
    MAIN: "Principal",
    CURRENT: "Actual",
    CURRENT_TEMP: "Temperatura actual",
    FEELS_LIKE: "Se siente como",
    WIND_SPEED: "Velocidad del viento",
    WIND_DEGREES: "Direccion del viento",
    COUNTRY: "Pais",
    NO_W_FOUND: "No resultados fueron encontrados",
    DOC_NOT_FOUND: "No fue encontrado en los documentos",
    MAINTAINERS: "Maintainers",
    DOWNLOADS: "Downloads",
    LAST_MODIFIED: "Last modified",
    ALPHA_CODE: "Alpha-2 code",
    CALLING_CODES: "Calling Codes",
    DOMAINS: "Domains",
    CAPITAL: "Capital",
    TIMEZONES: "Timezones",
    WEB_HTTP: "URL must start with `http://` or `https://`",
    WEB_NSFW: "Cannot display this site in a non-NSFW channel",
    WEB_UNAVAILABLE: "This site seems to be unavailable",
    IP_NOT_FOUND: "No results were found",
    IP_LON_LAT: "Lon/Lat",
    IP_ISP: "ISP",
    IP_ORG: "Org",
    IP_TIMEZONE: "Timezone",
    IP_LOC: "es", // https://ipwhois.io/documentation Localization
    VERIFY_CHANNEL: "Verification channel is: {channel}",
    VERIFY_NOT_ENABLED: "Verification is not enabled for this guild",
    CHANNEL_TYPES: {
      GUILD_TEXT: "Text channel",
      GUILD_VOICE: "Voice channel",
      GUILD_STAGE_VOICE: "Stage channel",
      GUILD_NEWS: "News channel",
      GUILD_STORE: "Store channel",
      GUILD_CATEGORY: "Category channel",
      GUILD_NEWS_THREAD: "New thread",
      GUILD_PUBLIC_THREAD: "Public thread",
      GUILD_PRIVATE_THREAD: "Private thread",
    },
    TOTAL_TRACKS: "Total tracks",
    RELEASE_DATE: "Release date",
    HEX_COLOR: "HEX Color",
    MDN_NOT_FOUND: "No results found for that query",
    UNKNOWN: "Unknown",
    PASTE_INVALID_FORMAT:
      "An invalid format was requested, valid types: https://pastebin.com/doc_api#5",
    SENT_SUG: "Sent suggestion 👍",
    ALREADY_VERIFED: "You are already verified",
    READ_MORE: "read more",
    EMOJI_NOT_FOUND: "Emoji can only be a custom emoji or the emoji was not found",
    EMOJI_INFO: "Emoji info",
    INVALID_PERMS: "Invalid Permissions",
    CREATED_AT: "Created At",
    ACCESSIBLE_BY: "Accessible By",
    GENERAL_INFO: "General Info",
    USES: "Uses",
    NO_DESCRIPTION: "No description",
    GUILD: "Guild",
    CHANNEL: "Channel",
    INVITER: "Inviter",
    INVITE: "Invite",
    ROLE_MENTION: "Role mention",
    SPOT_ARTISTS: "Artists",
    SPOT_ALBUM: "Album",
    SPOT_GENRES: "Genres",
    SPOT_TOP: "Top 10 tracks",
    SPOT_TRACKS: "Tracks",
    SPOT_MORE_TRACKS: "{tracks - 10} more tracks",
    USER_INFO: "{username}'s info",
    GUILD_INFO: "Guild info",
    TEMPERATURE: "Temperature",
    MY_PING: "My ping is `{ping}`ms",
  },
  BOT: {
    GUILDS: "Gremios",
    CHANNELS: "Canales",
    USERS: "Usuarios",
    COMMAND_COUNT: "Numero de comandos",
    INFO_2: "Información del bot",
    INFO: "Info del bot",
    SYSTEM_INFO: "Info del sistema",
    RAM_USAGE: "Uso de RAM",
    UPTIME: "Tiempo activo",
    DJS_V: "Version de Discord.js",
    NODE_V: "Version de NodeJS",
    REPO: "Repositorio",
    DASHBOARD: "Dashboard",
    DEVELOPER: "Developer",
    CONTRIBUTORS: "Contributors",
    INVITE_BOT: "Invite bot",
    USED_SINCE_UP: "Used since up",
    TOTAL_USED_CMDS: "Total used",
    LATENCY: "Latency",
    CLICK_HERE: "Click Here",
  },
  HELP: {
    HELP: "Help",
    CAT_NOT_EXIST: "Esa categoria no fue encontrada",
    CMD_NOT_FOUND: "Comando o alias no encontrado",
    FULL_CMD_LIST: "View full detail command list",
    CLICK_ME: "Click me",
    COMMANDS: "Comandos",
    COOLDOWN: "Refrescamiento",
    ALIASES: "Alias",
    USAGE: "Uso",
    COMMAND: "Comando",
    OPTIONS: "Opciones",
    OWNER_ONLY: "Solo el dueño puede ver esto!",
    CUSTOM_CMD: "This is a custom command, therefore I cannot show more info",
    BOT_PERMS: "Bot Permissions",
    MEMBER_PERMS: "Member Permissions",
    DEPRECATED:
      "**Note: Regular are considered deprecated for GhostyBot. We're working hard to transition the last batch of regular commands to slash commands.**",
    CATEGORIES: {
      admin: "Comandos de admins",
      animal: "Comandos de animales",
      "bot-owner": "Comandos del dueño del bot",
      games: "Comandos de juegos",
      image: "Comandos de imagenes",
      music: "Comandos de musica",
      util: "Comandos de utilidad",
      economy: "Comandos de economia",
      levels: "Comandos de niveles",
      exempt: "Comandos exentos (comandos que no pueden ser deshabilitados)",
      disabled: "Disabled commands (this guild only)",
      giveaway: "Giveaway commands",
      reminder: "Reminder commands",
      custom: "Custom commands",
      ticket: "Ticket commands",
    },
  },
  POKEMON: {
    SPECIES: "Especie",
    ABILITIES: "Habilidades",
    HEIGHT: "Altura",
    WEIGHT: "Peso",
    EXPERIENCE: "Experiencia",
    GENDER: "Genero",
    EGG_GROUPS: "Grupo de huevo",
    FAMILY: "Familia",
    EVO_STAGE: "Etapas de evolución",
    EVO_LINE: "Linea de evolucion",
    STATS: "Estadisticas",
    HP: "HP",
    ATTACK: "Ataque",
    DEFENSE: "Defensa",
    SP_ATK: "SP ATK",
    SP_DEF: "SP DEF",
    SPEED: "Veñocidad",
    TOTAL: "Total",
    NOT_FOUND:
      "Ningun pokémon fue encontrado con {query}. Por favor usa el deletreo correcto e intenta de nuevo.",
  },
  REMINDER: {
    SUCCESS: "Success! I will ping you **in this channel** in {time}",
    REMOVE_SUCCESS: "Successfully removed your reminder",
    NO_REMINDER_SET: "You don't have a reminder set",
    INVALID_DATE: "That is not a valid date",
    NOT_FOUND: "That reminder was not found",
    UPDATED: "Updated reminder",
    NO_ACTIVE_REM: "User doesn't have any active reminders",
    MESSAGE: "Message:",
    TIME: "Time:",
    ENDS_IN: "Ends In:",
    USER_REMINDERS: "{memberUsername}'s active reminders",
    ALL_DELETED: "Removed all your reminders",
  },
  COVID: {
    CASES: "Cases",
    RECOVERED: "Recovered",
    DEATHS: "Deaths",
    TOTAL: "Total",
    TODAY: "Today",
    CRITICAL: "Critical",
    TESTS: "Tests",
    LAST_UPDATED: "Last updated",
    NOT_FOUND: "Country was not found",
    TOTAL_POP: "Population",
  },

  ADMIN: {
    CREATED_ROLE_CREATED: "Created Role",
    CREATED_ROLE_ADDED: "Successfully created the `{roleName}` role",
    DEAFEN_ALREADY_DEAFENED: "User is not in a voice channel or is already deafened",
    DEAFEN_SUCCESS:
      "{member} was successfully deafenned from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    DEAFEN_SUCCESS_DM: "You've been **Deafenned** from **{guild}**, Reason: **{reason}**",
    DELETE_PROVIDE_AMOUNT: "Amount must be a valid number and between 0 below 100",
    DELETE_DELETED: "Deleted {amount} messages.",
    DELETE_ERROR:
      "An error occurred when deleting the messages, make sure they are not older than 14days",
    KICK_CANNOT_KICK: "That person can't be kicked.",
    KICK_SUCCESS_DM: "You've been **kicked** from **{guild}**, Reason: **{reason}**",
    KICK_SUCCESS:
      "**{tag}** was successfully kicked from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    MUTE_CANNOT_MUTE: "That member cannot be muted",
    MUTE_ALREADY_MUTED: "Member is already muted",
    MUTE_SUCCESS_DM: "You've been **muted** from **{guild}**, Reason: **{reason}**",
    MUTE_SUCCESS:
      "**{tag}** was successfully muted from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    BAN_BANNED_BY: "**Banned By:**",
    NUKE_NUKED: "Channel was successfully nuked",
    NUKE_CANCELED: "Nuke command was canceled",
    NUKE_CONFIRM: "Are you sure you want to nuke this channel? y/n",
    CHANNEL_CANNOT_BE_DELETED: "That channel cannot be deleted",
    TEXT_OR_VALID_CHANNEL: "Please provide text or a valid channel!",
    DEFAULT_ANNOUNCE_CHANNEL:
      "You can also set a default channel using `set announce-channel <channel mention>`",
    CHANNEL_ALREADY_LOCKED: "That channel is already locked!",
    LOCKED_CHANNEL_REASON: "Successfully locked {channel}, Reason: **{lockReason}**",
    MY_ROLE_MUST_BE_HIGHER: "My role must be higher than **{roleName}** role!",
    MY_ROLE_MUST_BE_HIGHER2: "My role must be higher than **{needsRoleTag}** highest role!",
    REMOVED_ROLE: "Successfully removed **{roleName}** from {needsRole}",
    REMOVED_ROLE_EVERYONE: "Successfully Removed **{roleName}** from Everyone",
    PROVIDE_VALID_USER: "Please provide a valid user",
    NO_WARNINGS: "There are no warnings",
    ANNOUNCEMENT: "📢 Announcement 📢",
    PROVIDE_VALID_MEMBER: "Please provide valid a member",
    PROVIDE_VALID_EMOJI: "Please provide a valid emoji",
    EMOJI_ADDED_NAME: "Emoji Has Been Added! | Name:",
    PREVIEW: "Preview:",
    USE_NORMAL_EMOJI: "You Can Use Normal Emoji Without Adding In Server!",
    MAX_EMOJI: "Maximum emoji count reached for this guild!",
    STICKY_LONG: "Your sticky message can not be longer than 1800 characters!",
    STICKY_READ: "__***:warning: Sticky Message, Read Before Typing! :warning:***__",
    ALREADY_MUTED: "User is already muted!",
    CAN_NOT_MUTED: "User can't be muted",
    TEMP_MUTED:
      "You've been **temporary muted** from **{guildName}**, Reason: **{reason}**, Time: **{time}**",
    SUCCES_MUTED: "{muteMemberTag} was successfully muted for {time}. Reason: **{reason}**",
    PROVIDE_VALID_USERID: "Please provide a user id",
    SUC_UNBAN: "**{bannedUsername}** was successfully unbanned from the server.",
    NOT_IN_VOICE_OR_NOT_DEAF: "User is not in a voice channel or isn't deafened",
    UNDEAFENED_USER: "You've been **undeafened** from **{guildName}**",
    UNDEAFENED:
      "**{undeafenUserTag}** was successfully undeafened from the server. I have also send a DM letting the person know.",
    CHAN_NOT_LOCK: "That channel is not locked!",
    SUC_UNLOCK: "{channel} was successfully unlocked",
    NOT_MUTED: "User is not muted!",
    SUC_UNMUTE: "Successfully unmuted **{mutedMemberTag}**",
    EMOJI_ADDED: "Emoji Added",
    STICKY_CLEAR: "Cleared sticky for **{channel}**",
    CAN_NOT_DISC: "User can't be disconnected.",
    NOT_IN_VOICE: "User is not in a voice at the moment.",
    YOU_DISC: "You've been **disconnected** from **{guildName}**, Reason: **{reason}**",
    USER_DISC:
      "**{kickUserTag}** was successfully disconnected from **{kickUserVoiceChannel}**. Reason: **{reason}**. I have also send a DM letting the person know.",
    USER_NOT_VOICE_OR_MUTED: "User is not in a voice channel or is already muted",
    YOU_MUTED: "You've been **Muted** from **{guildName}**, Reason: **{reason}**",
    USER_MUTED:
      "**{muteUserTag}** was successfully muted from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    USER_NOT_VOICE_OR_NOT_MUTED: "User is not in a voice channel or isn't muted",
    YOU_UNMUTED: "You've been **Unmuted** from **{guildName}**",
    USER_SUC_UNMUTED:
      "**{unmuteUserTag}** was successfully unmuted from the server. I have also send a DM letting the person know.",
    USER_NOT_WARN: "User can't be warned",
    USER_WARNED: "{memberTag} was warned with reason: {reason} (Total warnings: {warningsTotal})",
    WARN_NOT_FOUND: "warning wasn't found or {memberTag} doesn't have any warnings",
    WARNING: "Warning:",
    WARNED_ON: "Warned on:",
    MEMBER_WARNS: "{memberTag}'s warnings",
    TOTAL_WARNS: "Total warnings",
    ADDED_ROLE_TO: "Successfully added the **{roleName}** role for **{time}** to {userTag}",
    CANNOT_USE_CMD_THREAD: "Cannot use this command in a thread channel!",
  },
  TICKET: {
    CANNOT_DO_ACTION: "This action cannot be done in a non ticket channel",
    CLOSING: "Closing this ticket in 15 seconds, type `cancel` to cancel",
    WILL_NOT_CLOSE: "This ticket will not be closed.",
    ALREADY_ACTIVE_TICKET: "You already have an active ticket",
    TICKET_FOR: "Support ticket for: {member}",
    CREATED: "Successfully created ticket!",
    CREATED_IN: "Ticket was successfully created in {channel}",
    NOT_ENABLED:
      "Tickets are not enabled for this guild! An administrator can enable it in {botName}'s settings",
    TICKET: "ticket-#{Id}",
  },
  EVENTS: {
    CHANNEL_CREATED: "Channel Created",
    CHANNEL_CREATED_MSG: "{channel_type}: **{channel}** was created",
    CHANNEL_DELETED: "Channel Deleted",
    CHANNEL_DELETED_MSG: "{channel_type}: **{channel}** was deleted",
    CHANNEL_RENAME_MSG: "{channel_type}: **{channel}** was renamed to **{new_channel}**",
    CHANNEL_RENAME: "Channel Rename",
    EMOJI_CREATED_MSG: "Emoji: {emoji} was created",
    EMOJI_CREATED: "New Emoji Created",
    EMOJI_DELETED_MSG: "Emoji: **{emoji}** was deleted",
    EMOJI_DELETED: "Emoji Deleted",
    EMOJI_RENAMED_MSG: "Emoji: **{emoji_name}** was renamed to **{new_name}** ({emoji})",
    BANNED_MEMBER: "Banned Member",
    NOT_FOUND: "Not found",
    BAN_ADD: "Member Banned",
    KICK_ADD: "Member Kicked",
    EXECUTED_BY: "Executed By",
    REASON: "Reason",
    STARBOARD_MESSAGE: "{userTag}, this message is already in the starboard",
    STARBOARD_NOT_STAR: "{userTag}, you cannot star an empty message.",
    CHANNEL_TOPIC_UPDATED: "Channel Topic Updated",
    CHANNEL_TOPIC_UPDATED_MSG: "Channel topic in channel: **{channel}** was updated",
    CHANNEL_OLD_TOPIC: "Old Topic",
    CHANNEL_NEW_TOPIC: "New Topic",
    STICKER_CREATED: "New Sticker Created",
    STICKER_DELETED_MSG: "A sticker was deleted",
    STICKER_DELETED: "Sticker Deleted",
    STICKER_UPDATED: "Sticker updated",
    NAME_UPDATED: "Name updated",
    DESCRIPTION_UPDATED: "Description updated",
  },
  MESSAGE: {
    USER_IS_AFK: "{tag} is AFK!\n **Reason**: {reason}",
    NOT_AFK_ANYMORE: "{tag} is not AFK anymore",
    BLACKLISTED: "You're blacklisted from using this bot.",
    CATEGORY_DISABLED:
      "That command is disabled because this guild disabled the {category} category",
    COMMAND_DISABLED: "That command was disabled for this guild",
    OWNER_ONLY: "This command can only be used by the owners!",
    INCORRECT_ARGS: "Incorrect command usage",
    REQUIRED_ARGS: "You must provide more args: {args}",
    COOLDOWN_AMOUNT: "Please wait **{time}** more seconds before using the **{command}** command",
    BAD_WORD:
      "{mention}, you used a bad word the admin has set, therefore your message was deleted",
    EXAMPLE: "Example:",
    SUPPORT: "Support",
    NEED_PERMS: "You need: {perms} permissions",
    MUST_BE_DATE: "That arg type must be a **date**. E.G.: `1h`, `2days`, `5min`",
    MUST_BE_NUMBER: "That arg type must be a **number**.",
  },
  GIVEAWAY: {
    NEW: "**🎉🎉 New Giveaway 🎉🎉**",
    ENDED: "**GIVEAWAY ENDED**",
    ALREADY_ENDED: "Giveaway already ended yet or was not found",
    SUCCESS_ENDED: "Successfully ended giveaway",
    SUCCESS_REROLLED: "Successfully re-rolled the giveaway",
    STARTED: "Giveaway has started",
    NOT_FOUND: "No giveaway found with id: {id}",
  },
  OTHER: {
    REGIONS: {
      europe: ":flag_eu: Europe",
      "eu-west": ":flag_eu: Europe-West",
      "eu-central": ":flag_eu: Europe-Central",
      brazil: ":flag_br: Brazil",
      hongkong: ":flag_hk: Hongkong",
      india: ":flag_in: India",
      japan: ":flag_jp: Japan",
      russia: ":flag_ru: Russia",
      singapore: ":flag_sg: Singapore",
      southafrica: ":flag_za: South Africa",
      sydney: ":flag_au: Sydney",
      frankfurt: ":flag_de: Frankfurt",
      "us-central": ":flag_us: USA-Central",
      "us-east": ":flag_us: US-East",
      "us-west": ":flag_us: US-West",
      "us-south": ":flag_us: US-South",
      amsterdam: ":flag_nl: Amsterdam",
      dubai: ":flag_ae: Dubai",
      "south-korea": ":flag_kr: South Korea",
      london: ":flag_gb: London",
    },
    VERLEVELS: {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "High",
      VERY_HIGH: "Very High",
    },
    MFA_LEVELS: {
      NONE: "None",
      ELEVATED: "Elevated",
    },
    ANSWERS: [
      "Yes.",
      "No.",
      "My sources say yes",
      "Most likely.",
      "idk",
      "maybe sometime",
      "Outlook good.",
      "Signs point to yes.",
      "Definitely",
      "Absolutely",
      "Nope.",
      "No thanks, I won’t be able to make it.",
      "No Way!",
      " It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
    ],
    WIND_DIRECTIONS: {
      NORTH: "North",
      NORTH_EAST: "North East",
      EAST: "East",
      SOUTH: "South",
      SOUTH_EAST: "South East",
      SOUTH_WEST: "South West",
      WEST: "West",
      NORTH_WEST: "North West",
    },
  },
  INVITE: {
    NOT_FOUND: "That invite was not found.",
    NOT_EXPIRED_YET: "This invite has not expired yet.",
    NOT_EXPIRE: "This invite does not expire",
    EXPIRATION: "Expiration",
    EXPIRES_AT: "Expires at",
    EXPIRED_AT: "Expired at",
  },
};

export default LANG;
