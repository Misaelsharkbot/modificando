let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, y ${toM(b)}, 𝙷𝙰𝙲𝙴𝙽 𝚄𝙽𝙰 𝙱𝚄𝙴𝙽𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 (ɔ◔‿◔)ɔ ♥ 💓*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
export default handler
