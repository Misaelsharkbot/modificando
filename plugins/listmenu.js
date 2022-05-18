let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
   title: `────  DyLux  ┃ ᴮᴼᵀ  ────`,
rows: [
{title: "👨‍🔬 | 𝐂𝐫𝐞𝐚𝐝𝐨𝐫", description: "ɪᴍꜰᴏʀᴍᴀᴄɪᴏɴ ꜱᴏʙʀᴇ ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}owner`},
{title: "⛑ | 𝐃𝐨𝐧𝐚𝐫", description: "ɪᴍꜰᴏʀᴍᴀᴄɪᴏɴ ꜱᴏʙʀᴇ ᴅᴏɴᴀᴄɪᴏɴᴇꜱ", rowId: `${usedPrefix}donar`},
{title: "🤖 | 𝐁𝐨𝐭", description: "ᴘᴏʀ ꜱɪ Qᴜɪᴇʀᴇꜱ ʜᴀʙʟᴀʀ ᴄᴏɴ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}bot`},
{title: "👨‍👩‍👧‍👦 | 𝐆𝐫𝐮𝐩𝐨𝐬", description: "Grupos de DyLux  ┃ ᴮᴼᵀ", rowId: `${usedPrefix}gpdylux`},   
{title: "⚜ | 𝐌𝐞𝐧𝐮", description: "ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}menu`},    
{title: "⚜ | 𝐌𝐞𝐧𝐮𝟐", description: "ᴏᴛʀᴏꜱ ᴄᴏᴍᴀɴᴅᴏꜱ", rowId: `${usedPrefix}menu2`},      
{title: "💾 | 𝐒𝐂", description: "ꜱᴄʀɪᴘ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}scrip`},    
{title: "🛠 | 𝐈𝐧𝐟𝐨", description: "ɪɴꜰᴏʀᴍᴀᴄɪᴏɴ ꜱᴏʙʀᴇ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}info`},
{title: "🎲 | 𝐃𝐚𝐝𝐨", description: "ᴜɴ ᴅᴀᴅᴏ ᴀʟ ᴀᴢᴀʀ", rowId: `${usedPrefix}dado`},
{title: "✊ | 𝐏𝐏𝐓", description: "juego del piedra papel o tijera con el bot", rowId: `${usedPrefix }ppt`},
{title: "⭕ | 𝐓𝐢𝐜𝐭𝐚𝐜𝐭𝐨𝐞", description: "ᴊᴜᴇɢᴏ ᴄʟᴀꜱɪᴄᴏ ᴛɪᴄᴛᴀᴄᴛᴏᴇ", rowId: `${usedPrefix}ttt a`},
{title: "🎰 | 𝐒𝐥𝐨𝐭", description: "ᴊᴜᴇɢᴏ ᴅᴇ ᴛʀᴀɢᴀᴍᴏɴᴇᴅᴀꜱ", rowId: `${usedPrefix}slot`},  
{title: "➗ | 𝐌𝐚𝐭𝐞𝐬", description: "ᴊᴜᴇɢᴏ ᴍᴀᴛᴇᴍᴀᴛɪᴄᴏ", rowId: `${usedPrefix}mates`},
{title: "💹 | 𝐋𝐞𝐯𝐞𝐥𝐮𝐩", description: "ꜱᴜʙɪʀ ᴅᴇ ɴɪᴠᴇʟ", rowId: `${usedPrefix}nivel`},
{title: "💎 | 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬", description: "ᴍᴜᴇꜱᴛʀᴀ ᴄᴜᴀɴᴛᴏꜱ ᴅɪᴀᴍᴀɴᴛᴇꜱ ᴛɪᴇɴᴇꜱ", rowId: `${usedPrefix}bal`},
{title: "💰 | 𝐂𝐥𝐚𝐢𝐦", description: "ʀᴇᴄʟᴀᴍᴀ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇꜱᴀ ᴅɪᴀʀɪᴀ", rowId: `${usedPrefix}claim`},
{title: "⛏ | 𝐌𝐢𝐧𝐚𝐫", description: "ʙᴜꜱᴄᴀʀ ᴇxᴘ", rowId: `${usedPrefix}minar`},
{title: "🥇 | 𝐓𝐨𝐩", description: "ᴍᴜᴇꜱᴛʀᴀ ʟᴀ ᴛᴀʙʟᴀ ᴅᴇ ᴘᴜɴᴛᴀᴊᴇ", rowId: `${usedPrefix}top`},
{title: "💸 | 𝐁𝐮𝐲", description: "ᴄᴏᴍᴘʀᴀʀ ᴅɪᴀᴍᴀɴᴛᴇꜱ", rowId: `${usedPrefix}buy`},
{title: "💱 | 𝐁𝐮𝐲𝐚𝐥𝐥", description: "ᴄᴏᴍᴘʀᴀʀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴅɪᴀᴍᴀɴᴛᴇꜱ Qᴜᴇ ᴘᴜᴇᴅᴀꜱ", rowId: `${usedPrefix}buyall`},
{title: "🏦 | 𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫", description: "ᴛʀᴀꜱꜰᴇʀɪʀ ᴇxᴘ ᴀ ᴏᴛʀᴀ ᴘᴇʀꜱᴏɴᴀ", rowId: `${usedPrefix}transfer`},
{title: "👷‍♂️ | 𝐓𝐫𝐚𝐛𝐚𝐣𝐚𝐫", description: "ᴛʀᴀʙᴀᴊᴀꜱ ᴘᴏʀ ᴇxᴘ", rowId: `${usedPrefix}w`},
{title: "🏢 | 𝐄𝐦𝐨𝐣𝐢𝐦𝐢𝐱", description: "ᴊᴜɴᴛᴀʀ ᴅᴏꜱ ᴇᴍᴏᴊɪꜱ ᴇɴ ᴜɴᴏ", rowId: `${usedPrefix}emojimix`},
{title: "🏢 | 𝐄𝐦𝐨𝐣𝐢𝐦𝐢𝐱𝟐", description: "ᴜɴᴀ ꜱᴇʀɪᴇ ᴅᴇ ᴇᴍᴏᴊɪꜱ ᴅᴇ ᴜɴ ᴇᴍᴏᴊɪ ᴀʟᴇᴀᴛᴏʀɪᴏ", rowId: `${usedPrefix}emojimix2`},
{title: "Ⓜ | 𝐀𝐭𝐭𝐩", description: "ʜᴀᴄᴇ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴅᴇ ʟᴏ Qᴜᴇ ᴇꜱᴄʀɪᴠᴇꜱ", rowId: `${usedPrefix}attp`},
{title: "Ⓜ | 𝐓𝐭𝐩", description: "ʜᴀᴄᴇ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴅᴇ ʟᴏ Qᴜᴇ ᴇꜱᴄʀɪᴠᴇꜱ", rowId: `${usedPrefix}ttp`},
{title: "🤔 | 𝐆𝐞𝐭𝐞𝐱𝐢𝐟", description: "ᴍᴜᴇꜱᴛʀᴀ ʟᴀꜱ ᴄᴀʀᴀᴄᴛᴇʀɪꜱᴛɪᴄᴀꜱ ᴏᴄᴜᴀʟᴛᴀꜱ ᴅᴇ ᴜɴ ꜱᴛɪᴄᴋᴇʀ", rowId: `${usedPrefix}getexif`},
{title: "👄 | 𝐁𝐞𝐬𝐨", description: "ʟᴇ ᴅᴀꜱ ᴜɴ ʙᴇꜱᴏ ᴀ ᴀʟɢᴜɪᴇɴ", rowId: `${usedPrefix}kiss`},
{title: "🥺 | 𝐏𝐚𝐥𝐦𝐚𝐝𝐢𝐭𝐚𝐬", description: "ʟᴇ ᴅᴀꜱ ᴘᴀʟᴍᴀᴅɪᴛᴀꜱ ᴀ ᴀʟɢᴜɪᴇɴ", rowId: `${usedPrefix}pat`},
{title: "💠 | 𝐑𝐞𝐚𝐜𝐭", description: "ᴘᴏɴᴇꜱ ᴜɴ ᴇᴍᴏᴊɪ ᴇɴ ᴇʟ ᴍᴇɴꜱᴀᴊᴇ ᴅᴇ ᴜɴᴀ ᴘᴇʀꜱᴏɴᴀ", rowId: `${usedPrefix}react`},
{title: "💠 | 𝐒𝐭𝐢𝐜𝐤𝐞𝐫", description: "ʜᴀᴄᴇ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴅᴇ ᴜɴᴀ ɪᴍᴀɢᴇɴ/ᴠɪᴅᴇᴏ/ᴇɴʟᴀᴄᴇ", rowId: `${usedPrefix}s`},
{title: "📄 | 𝐓𝐨𝐢𝐦𝐠", description: "ʜᴀᴄᴇ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ɪᴍᴀɢᴇɴ", rowId: `${usedPrefix}toimg`},
{title: "📄 | 𝐓𝐨𝐢𝐦𝐠𝟐", description: "ʜᴀᴄᴇ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ɪᴍᴀɢᴇɴ", rowId: `${usedPrefix}toimg2`},
{title: "🏃‍♂️ | 𝐑𝐨𝐛𝐚𝐫", description: "ʀᴏʙᴀꜱ ᴇʟ ꜱᴛɪᴄᴋᴇʀ ᴅᴇ ᴜɴᴀ ᴘᴇʀꜱᴏɴᴀ", rowId: `${usedPrefix}wm`},
{title: "🔍 | 𝐈𝐦𝐚𝐠𝐞𝐧", description: "ʙᴜꜱᴄᴀꜱ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴇɴ ɢᴏᴏɢʟᴇ", rowId: `${usedPrefix}imagen`},
{title: "🅿 | 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭", description: "ʙᴜꜱᴄᴀꜱ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴇɴ ᴘɪɴᴛᴇʀᴇꜱᴛ", rowId: `${usedPrefix}pinterest`},
{title: "👩 | 𝐆𝐢𝐫𝐥", description: "ᴛᴇ ᴍᴜᴇꜱᴛʀᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴍᴜᴊᴇʀᴇꜱ", rowId: `${usedPrefix}girl`},
{title: "🖼 | 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫", description: "ꜰᴏᴅᴏꜱ ᴅᴇ ᴘᴀɴᴛᴀʟʟᴀ", rowId: `${usedPrefix}wallpaper`},
{title: "🎞 | 𝐏𝐞𝐫𝐟𝐢𝐥", description: "ᴍᴜᴇꜱᴛʀᴀ ᴛᴜ ᴘᴇʀꜰɪʟ", rowId: `${usedPrefix}perfil`},
{title: "🛑 | 𝐒𝐢𝐦𝐮𝐥𝐚𝐫", description: "ʜᴀᴄᴇʀ ᴜɴᴀ ꜱɪᴍᴜʟᴀᴄɪᴏɴ ᴅᴇ ᴜɴ ᴄᴏᴍᴀɴᴅᴏ", rowId: `${usedPrefix}simular`},
{title: "🤵 | 𝐒𝐭𝐚𝐟𝐟", description: "ᴀᴅᴍɪɴɪꜱᴛʀᴀᴅᴏʀᴇꜱ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}staff`},
{title: "🔁 | 𝐀𝐝𝐝", description: "ᴀɢʀᴇɢᴀʀ ᴀ ᴀʟɢᴜɪᴇɴ ᴀʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}infogp`},
{title: "⁉ | 𝐈𝐧𝐟𝐨𝐠𝐩", description: "ɪᴍꜰᴏʀᴍᴀᴄɪᴏɴ ꜱᴏʙʀᴇ ᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}`},
{title: "💥 | 𝐤𝐢𝐜𝐤", description: "ᴇʟɪᴍɪɴᴀʀ ᴀ ᴀʟɢᴜɪᴇɴ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}kick`},
{title: "🔗 | 𝐋𝐢𝐧𝐤", description: "ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}link`},
{title: "🚫 | 𝐆𝐫𝐨𝐮𝐩", description: "ᴀʙʀɪʀ ᴏ ᴄᴇʀʀᴀʀ ᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}group`},
{title: "‼ | 𝐓𝐚𝐠𝐚𝐥𝐥", description: "ʟʟᴀᴍᴀʀ ᴀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴍɪᴇɴʙʀᴏꜱ ᴅᴇʟ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}tagall`},
{title: "✅ | 𝐄𝐧𝐚𝐛𝐥𝐞", description: "ᴀᴄᴛɪᴠᴀʀ ᴀʟɢᴜɴᴀꜱ ꜰᴜɴᴄɪᴏɴᴇꜱ", rowId: `${usedPrefix}enable`},
{title: "❎ | 𝐃𝐢𝐬𝐚𝐛𝐥𝐞", description: "ᴅᴇꜱᴀᴄᴛɪᴠᴀʀ ᴀʟɢᴜɴᴀꜱ ꜰᴜɴᴄɪᴏɴᴇꜱ", rowId: `${usedPrefix}disable`},
{title: "▫ | 𝐉𝐨𝐢𝐧", description: "ᴍᴇᴛᴇʀ ᴀʟ ʙᴏᴛ ᴀ ᴜɴ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}join`},
{title: "😋 | 𝐀𝐬𝐮𝐩𝐚𝐧", description: "muestra videos 🥴", rowId: `${usedPrefix}asupan`},
{title: "🥴 | 𝐋𝐨𝐥𝐢", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ʟᴏʟɪꜱ", rowId: `${usedPrefix}loli`},
{title: "🥴 | 𝐌𝐞𝐠𝐮𝐦𝐢𝐧", description: "", rowId: `${usedPrefix}megumin`},
{title: "🥴 | 𝐍𝐞𝐤𝐨", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴍᴇɢᴜᴍɪɴ", rowId: `${usedPrefix}neko`},
{title: "🥴 | 𝐖𝐚𝐢𝐟𝐮", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴡᴀɪꜰᴜꜱ", rowId: `${usedPrefix}waifu`},
{title: "🔄 | 𝐆𝐢𝐭𝐜𝐥𝐨𝐧𝐞", description: "", rowId: `${usedPrefix}gitclone`},
{title: "📷 | 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦", description: "", rowId: `${usedPrefix}instagram`},
{title: "🔘 | 𝐈𝐠𝐬𝐭𝐚𝐥𝐤", description: "", rowId: `${usedPrefix}igstalk`},
{title: "🗂 | 𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴜɴ ᴀʀᴄʜɪᴠᴏ ᴏ ᴀᴘᴋ ᴅᴇ ᴍᴇᴅᴀꜰɪʀᴇ", rowId: `${usedPrefix}medafire`},
{title: "📽 | 𝐩𝐥𝐚𝐲", description: "ᴅᴇꜱᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏꜱ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ", rowId: `${usedPrefix}play`},
{title: "🎼 | 𝐘𝐭𝐦𝐩𝟑", description: "ᴅᴇꜱᴄᴀʀᴀɢᴀʀ ᴜɴ ᴀᴜᴅɪᴏ ᴍᴇᴅɪᴀɴᴛᴇ ᴇʟ ᴜʀʟ", rowId: `${usedPrefix}ytmp3`},
{title: "📽 | 𝐘𝐭𝐦𝐩𝟒", description: "ᴅᴇꜱᴄᴀʀᴀɢᴀʀ ᴜɴ ᴠɪᴅᴇᴏ ᴍᴇᴅɪᴀɴᴛᴇ ᴇʟ ᴜʀʟ", rowId: `${usedPrefix}ytmp4`},
{title: "🔍 | 𝐆𝐨𝐨𝐠𝐥𝐞", description: "ʙᴜꜱᴄᴀʀ ᴀʟɢᴏ ᴇɴ ɢᴏᴏɢʟᴇ", rowId: `${usedPrefix}google`},
{title: "🎼 | 𝐋𝐲𝐫𝐢𝐜𝐬", description: "", rowId: `${usedPrefix}lyrics`},
{title: "💠 | 𝐐𝐑𝐜𝐨𝐝𝐞", description: "", rowId: `${usedPrefix}qrcode`},
{title: "💠 | 𝐥𝐞𝐞𝐫𝐦𝐚𝐬", description: "", rowId: `${usedPrefix}leermas`},
{title: "💠 | 𝐑𝐞𝐚𝐝𝐯𝐨", description: "", rowId: `${usedPrefix}readvo`},
{title: "🎙 | 𝐭𝐭𝐬", description: "ᴅɪʟᴇ ᴀʟ ʙᴏᴛ Qᴜᴇ Qᴜɪᴇʀᴇꜱ Qᴜᴇ ᴅɪɢᴀ", rowId: `${usedPrefix}tts`},
{title: "➕ | 𝐂𝐚𝐥", description: "ʜᴀᴄᴇʀ ᴏᴘᴇʀᴀᴄɪᴏɴᴇꜱ ᴍᴀᴛᴇᴍᴀᴛɪᴄᴀꜱ ᴇɴ ʟᴀᴄᴀʟᴄᴜʟᴀᴅᴏʀᴀ", rowId: `${usedPrefix}cal`},
{title: "⚜ | 𝐓𝐫𝐚𝐝", description: "ᴛʀᴀᴅᴜᴄɪʀ ᴜɴ ɪᴅɪᴏᴍᴀ ᴀ ᴏᴛʀᴏ", rowId: `${usedPrefix}trad`},
{title: "🔍 | 𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚", description: "ʙᴜꜱᴄᴀʀ ᴀʟɢᴏ ᴇɴ ᴡɪᴋɪᴘᴇᴅɪᴀ", rowId: `${usedPrefix}wikipedia`},
{title: "🔍 | 𝐘𝐭𝐬𝐞𝐚𝐫𝐜𝐡", description: "ʙᴜꜱᴄᴀʀ ᴀʟɢᴏ ᴇɴ ʏᴏᴜᴛᴜʙᴇ", rowId: `${usedPrefix}ytsearch`},
{title: "⚠ | 𝐀𝐟𝐤", description: "ɴᴏᴛɪꜰɪᴄᴀ ᴛᴜ ᴍᴏᴛɪᴠᴏ ᴘᴏʀ Qᴜᴇ ɴᴏ ᴠᴀꜱ ᴀ ᴇꜱᴛᴀʀ", rowId: `${usedPrefix}afk`},
{title: "🎧 | 𝐓𝐨𝐦𝐩𝟑", description: "ᴄᴏɴᴠɪᴇʀᴛᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴜɴ ᴀᴜᴅɪᴏ ᴀ ᴍᴘ3", rowId: `${usedPrefix}tomp3`},
{title: "💠 | 𝐓𝐨𝐚𝐯", description: "", rowId: `${usedPrefix}toav`},
{title: "🤢 | 𝐆𝐚𝐲", description: "", rowId: `${usedPrefix}gay`},
{title: "🤔 | 𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚", description: "ᴘʀᴇɢᴜɴᴛ ᴀʟɢᴏ ᴀʟ ʙᴏᴛ", rowId: `${usedPrefix}pregunta`},
{title: "📄 | 𝐭𝐱𝐭", description: "ᴇꜱᴄʀɪʙᴇ ʟᴏ Qᴜᴇ Qᴜɪᴇʀᴇꜱ Qᴜᴇ ᴅɪɢᴀ ᴇɴ ᴜɴᴀ ʜᴏᴊᴀ", rowId: `${usedPrefix}txt`},
{title: "📄 | 𝐭𝐱𝐭𝟐", description: "ᴇꜱᴄʀɪʙᴇ ʟᴏ Qᴜᴇ Qᴜɪᴇʀᴇꜱ Qᴜᴇ ᴅɪɢᴀ ᴇɴ ᴜɴᴀ ʜᴏᴊᴀ", rowId: `${usedPrefix}txt2`},
{title: "🔠 | 𝐋𝐨𝐠𝐨𝐬", description: "ᴍᴜᴇꜱᴛʀᴀ ᴜɴ ᴍᴇɴᴜ ᴅᴇ ʟᴏɢᴏꜱ Qᴜᴇ ᴘᴜᴇᴅᴇꜱ ʜᴀᴄᴇʀ", rowId: `${usedPrefix}logos`},
{title: "❣ | 𝐥𝐨𝐯𝐞", description: "ᴍᴇᴅɪᴅᴏʀ ᴅᴇ ᴀᴍᴏʀ, ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴄᴜᴀɴᴛᴏ ᴛᴇ ᴀᴍᴀ", rowId: `${usedPrefix}`},
{title: "💖 | 𝐅𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚", description: "ꜰᴏʀᴍᴀʀ ᴘᴀʀᴇᴊᴀꜱ", rowId: `${usedPrefix}formarpareja`},
{title: "🥵 | 𝐀𝐒𝐒", description: "", rowId: `${usedPrefix}ass`},
{title: "🥵 | 𝐁𝐥𝐨𝐰𝐣𝐨𝐛", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴄᴜʟᴏꜱ", rowId: `${usedPrefix}blowjob`},
{title: "🥵 | 𝐁𝐨𝐨𝐛𝐬", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢᴇɴᴇꜱ ᴅᴇ ᴛᴇᴛᴀꜱ", rowId: `${usedPrefix}boobs`},
{title: "🥵 | 𝐏𝐚𝐜𝐤", description: "ᴇɴᴠɪᴀ ᴘᴀᴄᴋ", rowId: `${usedPrefix}pack`},
{title: "🥵 | 𝐇𝐞𝐧𝐭𝐚𝐢", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢɴᴇꜱ ʜᴇɴᴛᴀɪ", rowId: `${usedPrefix}hentaih`},
{title: "🥵 | 𝐋𝐞𝐬𝐛𝐢𝐚𝐧", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢɴᴇꜱ ᴅᴇ ʟᴇꜱʙɪᴀɴᴀꜱ", rowId: `${usedPrefix}lesbian`},
{title: "🥵 | 𝐏𝐮𝐬𝐬𝐲", description: "ᴇɴᴠɪᴀ ɪᴍᴀɢɴᴇꜱ ᴘᴜꜱꜱʏ", rowId: `${usedPrefix}pussy`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `────  *DyLux  ┃ ᴮᴼᵀ*  ────
┌─⊷ *Nota*
ʜᴏʟᴀ ᴇꜱᴛᴇ ᴍᴇɴᴜ ᴀᴜɴ 
ɴᴏ ᴇꜱᴛᴀ ᴛᴇʀᴍɪɴᴀᴅᴏ
ᴀꜱɪ Qᴜᴇ ᴇꜱ ᴘᴏꜱɪʙʟᴇ 
Qᴜᴇ ᴛᴇɴɢᴀ ꜰᴀʟʟᴏꜱ 
ɢʀᴀᴄɪᴀꜱ ᴘᴏʀ ᴇɴᴛᴇɴᴇʀ
└─────────────
_*${author}*_`,
title: null,
buttonText: "ᕼᗩGᗩ ᑕᒪIᑕK",
sections }

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    // case 'detect':
    //   if (!m.isGroup) {
    //     if (!isOwner) {
    //       global.dfail('group', m, conn)
    //       throw false
    //     }
    //   } else if (!isAdmin) {
    //     global.dfail('admin', m, conn)
    //     throw false
    //   }
    //   chat.detect = isEnable
    //   break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
    case 'document':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
           }}
    chat.autosticker = isEnable 
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isEnable
    //   break
    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
    case 'escuchar':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
    case 'autoleer':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '✖️ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '.menu']],m)}

handler.help = ['menu3']
handler.tags = ['main']
handler.command = ['menu3', 'help3', 'menú3'] 
handler.register = false
handler.exp = 3

export default handler
