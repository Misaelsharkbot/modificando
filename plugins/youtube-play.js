import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `β³οΈ *Ingresa el tΓ­tulo de una canciΓ³n*\n\nπEjemplo *${usedPrefix + command}* Lil Peep hate my life `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'β³οΈ VΓ­deo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
  β‘ *FG MUSIC*
βββββββββββββββ
β’ π  *TΓ­tulo* : ${title}
β’ π *Publicado:* ${publishedTime}
β’ β *DuraciΓ³n:* ${durationH}
β’ π *Vistas:* ${viewH}
β’ π *Url:* ${url}
β’ π *Encriptado:* No
βββββββββββββββ
  `.trim(), igfg, thumbnail, 'https://youtube.com/fg98f', 'YouTube', null, null, [
    ['π₯ MP4', `${usedPrefix}ytv ${url} yes`],
    ['πΆ MP3', `${usedPrefix}yta ${url} yes`]
  ], m)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid', 'play2'] 

handler.exp = 0
handler.limit = false

export default handler

