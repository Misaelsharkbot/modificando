let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
   title: `DyLux  ┃ ᴮᴼᵀ`,
rows: [
{title: "👨‍🔬 | 𝐂𝐫𝐞𝐚𝐝𝐨𝐫", description: "", rowId: `${usedPrefix}owner`},
{title: "⛑ | 𝐃𝐨𝐧𝐚𝐫", description: "", rowId: `${usedPrefix}donar`},
{title: "🤖 | 𝐁𝐨𝐭", description: "", rowId: `${usedPrefix}bot`},
{title: "👨‍👩‍👧‍👦 | 𝐆𝐫𝐮𝐩𝐨𝐬", description: "", rowId: `${usedPrefix}gpdylux`},   
{title: "⚜ | 𝐌𝐞𝐧𝐮", description: "", rowId: `${usedPrefix}menu`},    
{title: "⚜ | 𝐌𝐞𝐧𝐮𝟐", description: "", rowId: `${usedPrefix}menu2`},      
{title: "💾 | 𝐒𝐂", description: "", rowId: `${usedPrefix}scrip`},    
{title: "🛠 | 𝐈𝐧𝐟𝐨", description: "", rowId: `${usedPrefix}info`},
{title: "🎲 | 𝐃𝐚𝐝𝐨", description: "", rowId: `${usedPrefix}dado`},
{title: "✊ | 𝐏𝐏𝐓", description: "", rowId: `${usedPrefix }ppt`},
{title: "⭕ | 𝐓𝐢𝐜𝐭𝐚𝐜𝐭𝐨𝐞", description: "", rowId: `${usedPrefix}ttt a`},
{title: "🎰 | 𝐒𝐥𝐨𝐭", description: "", rowId: `${usedPrefix}slot`},  
{title: "➗ | 𝐌𝐚𝐭𝐞𝐬", description: "", rowId: `${usedPrefix}mates`},
{title: "💹 | 𝐋𝐞𝐯𝐞𝐥𝐮𝐩", description: "", rowId: `${usedPrefix}nivel`},
{title: "💎 | 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬", description: "", rowId: `${usedPrefix}bal`},
{title: "💰 | 𝐂𝐥𝐚𝐢𝐦", description: "", rowId: `${usedPrefix}claim`},
{title: "⛏ | 𝐌𝐢𝐧𝐚𝐫", description: "", rowId: `${usedPrefix}minar`},
{title: "🥇 | 𝐓𝐨𝐩", description: "", rowId: `${usedPrefix}top`},
{title: "💸 | 𝐁𝐮𝐲", description: "", rowId: `${usedPrefix}buy`},
{title: "💱 | 𝐁𝐮𝐲𝐚𝐥𝐥", description: "", rowId: `${usedPrefix}buyall`},
{title: "🏦 | 𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫", description: "", rowId: `${usedPrefix}transfer`},
{title: "👷‍♂️ | 𝐓𝐫𝐚𝐛𝐚𝐣𝐚𝐫", description: "", rowId: `${usedPrefix}w`},
{title: "🏢 | 𝐄𝐦𝐨𝐣𝐢𝐦𝐢𝐱", description: "", rowId: `${usedPrefix}emojimix`},
{title: "🏢 | 𝐄𝐦𝐨𝐣𝐢𝐦𝐢𝐱𝟐", description: "", rowId: `${usedPrefix}emojimix2`},
{title: "Ⓜ | 𝐀𝐭𝐭𝐩", description: "", rowId: `${usedPrefix}attp`},
{title: "Ⓜ | 𝐓𝐭𝐩", description: "", rowId: `${usedPrefix}ttp`},
{title: "🤔 | 𝐆𝐞𝐭𝐞𝐱𝐢𝐟", description: "", rowId: `${usedPrefix}getexif`},
{title: "👄 | 𝐁𝐞𝐬𝐨", description: "", rowId: `${usedPrefix}kiss`},
{title: "🥺 | 𝐏𝐚𝐥𝐦𝐚𝐝𝐢𝐭𝐚𝐬", description: "", rowId: `${usedPrefix}pat`},
{title: "💠 | 𝐑𝐞𝐚𝐜𝐭", description: "", rowId: `${usedPrefix}react`},
{title: "💠 | 𝐒𝐭𝐢𝐜𝐤𝐞𝐫", description: "", rowId: `${usedPrefix}s`},
{title: "📄 | 𝐓𝐨𝐢𝐦𝐠", description: "", rowId: `${usedPrefix}toimg`},
{title: "📄 | 𝐓𝐨𝐢𝐦𝐠𝟐", description: "", rowId: `${usedPrefix}toimg2`},
{title: "🏃‍♂️ | 𝐑𝐨𝐛𝐚𝐫", description: "", rowId: `${usedPrefix}wm`},
{title: "🔍 | 𝐈𝐦𝐚𝐠𝐞𝐧", description: "", rowId: `${usedPrefix}imagen`},
{title: "🅿 | 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭", description: "", rowId: `${usedPrefix}pinterest`},
{title: "👩 | 𝐆𝐢𝐫𝐥", description: "", rowId: `${usedPrefix}girl`},
{title: "🖼 | 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫", description: "", rowId: `${usedPrefix}wallpaper`},
{title: "🎞 | 𝐏𝐞𝐫𝐟𝐢𝐥", description: "", rowId: `${usedPrefix}perfil`},
{title: "🛑 | 𝐒𝐢𝐦𝐮𝐥𝐚𝐫", description: "", rowId: `${usedPrefix}simular`},
{title: "🤵 | 𝐒𝐭𝐚𝐟𝐟", description: "", rowId: `${usedPrefix}staff`},
{title: "🔁 | 𝐀𝐝𝐝", description: "", rowId: `${usedPrefix}infogp`},
{title: "⁉ | 𝐈𝐧𝐟𝐨𝐠𝐩", description: "", rowId: `${usedPrefix}`},
{title: "💥 | 𝐤𝐢𝐜𝐤", description: "", rowId: `${usedPrefix}kick`},
{title: "🔗 | 𝐋𝐢𝐧𝐤", description: "", rowId: `${usedPrefix}link`},
{title: "🚫 | 𝐆𝐫𝐨𝐮𝐩", description: "", rowId: `${usedPrefix}group`},
{title: "‼ | 𝐓𝐚𝐠𝐚𝐥𝐥", description: "", rowId: `${usedPrefix}tagall`},
{title: "✅ | 𝐄𝐧𝐚𝐛𝐥𝐞", description: "", rowId: `${usedPrefix}enable`},
{title: "❎ | 𝐃𝐢𝐬𝐚𝐛𝐥𝐞", description: "", rowId: `${usedPrefix}disable`},
{title: "▫ | 𝐉𝐨𝐢𝐧", description: "", rowId: `${usedPrefix}join`},
{title: "😋 | 𝐀𝐬𝐮𝐩𝐚𝐧", description: "", rowId: `${usedPrefix}asupan`},
{title: "🥴 | 𝐋𝐨𝐥𝐢", description: "", rowId: `${usedPrefix}loli`},
{title: "🥴 | 𝐌𝐞𝐠𝐮𝐦𝐢𝐧", description: "", rowId: `${usedPrefix}megumin`},
{title: "🥴 | 𝐍𝐞𝐤𝐨", description: "", rowId: `${usedPrefix}neko`},
{title: "🥴 | 𝐖𝐚𝐢𝐟𝐮", description: "", rowId: `${usedPrefix}waifu`},
{title: "🔄 | 𝐆𝐢𝐭𝐜𝐥𝐨𝐧𝐞", description: "", rowId: `${usedPrefix}gitclone`},
{title: "📷 | 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦", description: "", rowId: `${usedPrefix}instagram`},
{title: "🔘 | 𝐈𝐠𝐬𝐭𝐚𝐥𝐤", description: "", rowId: `${usedPrefix}igstalk`},
{title: "🗂 | 𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞", description: "", rowId: `${usedPrefix}medafire`},
{title: "📽 | 𝐩𝐥𝐚𝐲", description: "", rowId: `${usedPrefix}play`},
{title: "🎼 | 𝐘𝐭𝐦𝐩𝟑", description: "", rowId: `${usedPrefix}ytmp3`},
{title: "📽 | 𝐘𝐭𝐦𝐩𝟒", description: "", rowId: `${usedPrefix}ytmp4`},
{title: "🔍 | 𝐆𝐨𝐨𝐠𝐥𝐞", description: "", rowId: `${usedPrefix}google`},
{title: "🎼 | 𝐋𝐲𝐫𝐢𝐜𝐬", description: "", rowId: `${usedPrefix}lyrics`},
{title: "💠 | 𝐐𝐑𝐜𝐨𝐝𝐞", description: "", rowId: `${usedPrefix}qrcode`},
{title: "💠 | 𝐥𝐞𝐞𝐫𝐦𝐚𝐬", description: "", rowId: `${usedPrefix}leermas`},
{title: "💠 | 𝐑𝐞𝐚𝐝𝐯𝐨", description: "", rowId: `${usedPrefix}readvo`},
{title: "🎙 | 𝐭𝐭𝐬", description: "", rowId: `${usedPrefix}tts`},
{title: "➕ | 𝐂𝐚𝐥", description: "", rowId: `${usedPrefix}cal`},
{title: "⚜ | 𝐓𝐫𝐚𝐝", description: "", rowId: `${usedPrefix}trad`},
{title: "🔍 | 𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚", description: "", rowId: `${usedPrefix}wikipedia`},
{title: "🔍 | 𝐘𝐭𝐬𝐞𝐚𝐫𝐜𝐡", description: "", rowId: `${usedPrefix}ytsearch`},
{title: "⚠ | 𝐀𝐟𝐤", description: "", rowId: `${usedPrefix}afk`},
{title: "🎧 | 𝐓𝐨𝐦𝐩𝟑", description: "", rowId: `${usedPrefix}tomp3`},
{title: "💠 | 𝐓𝐨𝐚𝐯", description: "", rowId: `${usedPrefix}toav`},
{title: "🤢 | 𝐆𝐚𝐲", description: "", rowId: `${usedPrefix}gay`},
{title: "🤔 | 𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚", description: "", rowId: `${usedPrefix}pregunta`},
{title: "📄 | 𝐭𝐱𝐭", description: "", rowId: `${usedPrefix}txt`},
{title: "📄 | 𝐭𝐱𝐭𝟐", description: "", rowId: `${usedPrefix}txt2`},
{title: "🔠 | 𝐋𝐨𝐠𝐨𝐬", description: "", rowId: `${usedPrefix}logos`},
{title: "❣ | 𝐥𝐨𝐯𝐞", description: "", rowId: `${usedPrefix}`},
{title: "💖 | 𝐅𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚", description: "", rowId: `${usedPrefix}formarpareja`},
{title: "🥵 | 𝐀𝐒𝐒", description: "", rowId: `${usedPrefix}ass`},
{title: "🥵 | 𝐁𝐥𝐨𝐰𝐣𝐨𝐛", description: "", rowId: `${usedPrefix}blowjob`},
{title: "🥵 | 𝐁𝐨𝐨𝐛𝐬", description: "", rowId: `${usedPrefix}boobs`},
{title: "🥵 | 𝐏𝐚𝐜𝐤", description: "", rowId: `${usedPrefix}pack`},
{title: "🥵 | 𝐇𝐞𝐧𝐭𝐚𝐢", description: "", rowId: `${usedPrefix}hentaih`},
{title: "🥵 | 𝐋𝐞𝐬𝐛𝐢𝐚𝐧", description: "", rowId: `${usedPrefix}lesbian`},
{title: "🥵 | 𝐏𝐮𝐬𝐬𝐲", description: "", rowId: `${usedPrefix}pussy`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `≡ Lista de Opciones
┌─⊷ *LISTA*
▢ welcome 
▢ delete 
▢ public 
▢ antilink
▢ nsfw
▢ antidelete
▢ autolevelup 
▢ detect 
▢ document 
▢ restrict 
▢ autoread 
▢ autosticker
▢ solopv
▢ sologp
└─────────────
*📌 Ejemplo :*
*${usedPrefix}enable* welcome
*${usedPrefix}disable* welcome
${author}`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
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
