import MessageType from '@adiwajshing/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'β³οΈ Menciona al usuario con @user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'β³οΈ Ingrese la cantidad de *Diamantes* que quiere transferir'
    if (isNaN(txt)) throw 'π’ sΓ³lo nΓΊmeros'
    let poin = parseInt(txt)
    let limit = poin
    let imt = Math.ceil(poin * impuesto)
    limit += imt
    if (limit < 1) throw 'β³οΈ MΓ­nimo es  *1*'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'β³οΈ *Diamantes* insuficiente para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`β‘ *TRANSFERENCIA π*
βββββββββββββββ
β’ *${-poin}* Diamantes 
β’ Impuesto 2% : *${-imt}* Diamantes
β’ Total gastado: *${-limit}* Diamantes
βββββββββββββββ`)
    conn.fakeReply(m.chat, `β’ Recibiste \n\n *+${poin}* Diamantes`, who, m.text)
}
handler.help = ['paydi @user <monto>']
handler.tags = ['xp']
handler.command = ['paydi', 'transferdiamond', 'transferdi'] 
handler.rowner = false

export default handler
