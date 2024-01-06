const { toAudio, toPTT } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command, text}) => {
	if (!text) throw `Mau namain document nya apa?\nExample : ${usedPrefix + command} spiderman`
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio|image/.test(mime)) throw `Balas video/audio/image dengan perintah *${usedPrefix + command} >nama file<*`
    let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    if (/^audio/.test(mime)) {
      conn.sendMessage(m.chat, {document: media, mimetype: mime, fileName: text + '.mp3'}, { quoted : m })
     } else if (/^video/.test(mime)) {
      conn.sendMessage(m.chat, {document: media, mimetype: mime, fileName: text + '.mp4'}, { quoted : m })
   } else if (/^image/.test(mime)) {
      conn.sendMessage(m.chat, {document: media, mimetype: mime, fileName: text + '.jpg'}, { quoted : m })
    } 
  }
handler.help = ['todoc', 'todocument'].map(v => v + ' >namafile<')
handler.tags = ['tools']
handler.command = /^to(doc|document)$/i

module.exports = handler