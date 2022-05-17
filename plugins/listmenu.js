
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
  title: `*DyLux  ┃ ᴮᴼᵀ*`,
rows: [
{title: "👨‍🔬 | 𝐂𝐫𝐞𝐚𝐝𝐨𝐫", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}owner`},
{title: "⛑ | 𝐃𝐨𝐧𝐚𝐫", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}donar`},
{title: "🤖 | 𝐁𝐨𝐭", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix}bot`},
{title: "👨‍👩‍👧‍👦 | 𝐆𝐫𝐮𝐩𝐨𝐬", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix}gpdylux`},   
{title: "⚜ | 𝐌𝐞𝐧𝐮", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix}menu`},    
{title: "⚜ | 𝐌𝐞𝐧𝐮𝟐", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}menu2`},      
{title: "💾 | 𝐒𝐂", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix}scrip`},    
{title: "🛠 | 𝐈𝐧𝐟𝐨", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙼𝙾𝙳𝙾 𝚀𝚄𝙴 𝚂𝙴 𝙴𝙽𝚅𝙸𝙰 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙻𝙰 𝙼𝚄𝚂𝙸𝙲𝙰", rowId: `${usedPrefix}info`},
{title: "🎲 | 𝐃𝐚𝐝𝐨", description: "𝙼𝙰𝚁𝙲𝙰 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙻𝙰𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾", rowId: `${usedPrefix}dado`},
{title: "✊ | 𝐏𝐏𝐓", description: "𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix }ppt`},
{title: "⭕ | 𝐓𝐢𝐜𝐭𝐚𝐜𝐭𝐨𝐞", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}ttt a`},
{title: "🎰 | 𝐒𝐥𝐨𝐭", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}slot`},  
{title: "➗ | 𝐌𝐚𝐭𝐞𝐬", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}mates`},
{title: "💹 | 𝐋𝐞𝐯𝐞𝐥𝐮𝐩", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}nivel`},
{title: "💎 | 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}bal`},
{title: "💰 | 𝐂𝐥𝐚𝐢𝐦", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}claim`},
{title: "⛏ | 𝐌𝐢𝐧𝐚𝐫", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}minar`},
{title: "🥇 | 𝐓𝐨𝐩", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}top`},
{title: "💸 | 𝐁𝐮𝐲", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}buy`},
{title: "💱 | 𝐁𝐮𝐲𝐚𝐥𝐥", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}buyall`},
{title: "🏦 | 𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}transfer`},
{title: "👷‍♂️ | 𝐓𝐫𝐚𝐛𝐚𝐣𝐚𝐫", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}w`},
{title: "🏢 | 𝐄𝐦𝐨𝐣𝐢𝐦𝐢𝐱", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}emojimix`},
{title: "🏢 | 𝐄𝐦𝐨𝐣𝐢𝐦𝐢𝐱𝟐", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}emojimix2`},
{title: "Ⓜ | 𝐀𝐭𝐭𝐩", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}attp`},
{title: "Ⓜ | 𝐓𝐭𝐩", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}ttp`},
{title: "🤔 | 𝐆𝐞𝐭𝐞𝐱𝐢𝐟", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}getexif`},
{title: "👄 | 𝐁𝐞𝐬𝐨", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}kiss`},
{title: "🥺 | 𝐏𝐚𝐥𝐦𝐚𝐝𝐢𝐭𝐚𝐬", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}pat`},
{title: "💠 | 𝐑𝐞𝐚𝐜𝐭", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}react`},
{title: "💠 | 𝐒𝐭𝐢𝐜𝐤𝐞𝐫", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}s`},
{title: "📄 | 𝐓𝐨𝐢𝐦𝐠", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}toimg`},
{title: "📄 | 𝐓𝐨𝐢𝐦𝐠𝟐", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}toimg2`},
{title: "🏃‍♂️ | 𝐑𝐨𝐛𝐚𝐫", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}wm`},
{title: "🔍 | 𝐈𝐦𝐚𝐠𝐞𝐧", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}imagen`},
{title: "🅿 | 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}pinterest`},
{title: "👩 | 𝐆𝐢𝐫𝐥", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}girl`},
{title: "🖼 | 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}wallpaper`},
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
{title: " | 𝐑𝐞𝐚𝐝𝐯𝐨", description: "", rowId: `${usedPrefix}readvo`},
{title: " | 𝐭𝐭𝐬", description: "", rowId: `${usedPrefix}tts`},
{title: " | 𝐂𝐚𝐥", description: "", rowId: `${usedPrefix}cal`},
{title: " | 𝐓𝐫𝐚𝐝", description: "", rowId: `${usedPrefix}trad`},
{title: " | 𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚", description: "", rowId: `${usedPrefix}wikipedia`},
{title: " | 𝐘𝐭𝐬𝐞𝐚𝐫𝐜𝐡", description: "", rowId: `${usedPrefix}ytsearch`},
{title: " | 𝐀𝐟𝐤", description: "", rowId: `${usedPrefix}afk`},
{title: " | 𝐓𝐨𝐦𝐩𝟑", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐓𝐨𝐚𝐯", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐆𝐚𝐲", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐭𝐱𝐭", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐭𝐱𝐭𝟐", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐋𝐨𝐠𝐨𝐬", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐥𝐨𝐯𝐞", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐅𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐝𝐞𝐥𝐜𝐦𝐝", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐥𝐢𝐬𝐭𝐜𝐦𝐝", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐬𝐞𝐭𝐜𝐦𝐝", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐀𝐒𝐒", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐁𝐥𝐨𝐰𝐣𝐨𝐛", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐁𝐨𝐨𝐛𝐬", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐏𝐚𝐜𝐤", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐇𝐞𝐧𝐭𝐚𝐢", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐋𝐞𝐬𝐛𝐢𝐚𝐧", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐏𝐮𝐬𝐬𝐲", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐁𝐚𝐧𝐜𝐡𝐚𝐭", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐔𝐧𝐛𝐚𝐧𝐜𝐡𝐚𝐭", description: "", rowId: `${usedPrefix}`},
{title: " | 𝐑𝐞𝐢𝐧𝐢𝐜𝐢𝐚𝐫", description: "", rowId: `${usedPrefix}`},
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
   // case 'delete':
     // if (m.isGroup) {
       // if (!(isAdmin || isOwner)) {
//          global.dfail('admin', m, conn)
  //        throw false
    //    }
      // }
    //  chat.delete = isEnable
   //   break
   // case 'antidelete':
   //   if (m.isGroup) {
   //     if (!(isAdmin || isOwner)) {
   //       global.dfail('admin', m, conn)
   //       throw false
   //     }
   //   }
   //   chat.delete = !isEnable
   //   break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
  //  case 'document':
  //  if (m.isGroup) {
  //      if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
  //    }
  //  chat.useDocument = isEnable
  //  break
  //  case 'public':
  //  case 'publico':
  //    isAll = true
  //    if (!isROwner) {
  //      global.dfail('rowner', m, conn)
  //      throw false
  //    }
  //    global.opts['self'] = !isEnable
   //   break
   // case 'antilink':
  //    if (m.isGroup) {
  //      if (!(isAdmin || isOwner)) {
  //        global.dfail('admin', m, conn)
  //        throw false
  //      }
  //    }
  //    chat.antiLink = isEnable
  //    break
  //  case 'autosticker':
  //    if (m.isGroup) {
  //      if (!(isAdmin || isOwner)) {
  //        global.dfail('admin', m, conn)
  //        throw false
  //         }}
  //  chat.autosticker = isEnable 
  //    
  //    case 'nsfw':
  //    case '+18':
   //    if (m.isGroup) {
   //      if (!(isAdmin || isOwner)) {
   //        global.dfail('admin', m, conn)
  //          throw false
  //         }}
  //  chat.nsfw = isEnable          
  //  break
//
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
  //  case 'autolevelup':
  //  isUser = true
  //   user.autolevelup = isEnable
   //  break
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
   // case 'restrict':
   // case 'restringir':
   //   isAll = true
   //   if (!isOwner) {
   //     global.dfail('owner', m, conn)
   //     throw false
   //   }
   //   bot.restrict = isEnable
   //   break
   // case 'nyimak':
  //  case 'escuchar':
  //    isAll = true
   //   if (!isROwner) {
   //     global.dfail('rowner', m, conn)
    //    throw false
   //   }
   //   global.opts['nyimak'] = isEnable
//  break
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

handler.help = ['listmenu')
handler.tags = ['main']
handler.command = ['listmenu'] 

export default handler
