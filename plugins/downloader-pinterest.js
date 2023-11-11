let { pinterest } = require('@bochilteam/scraper')

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Gambar apa yang Anda ingin saya cari?\n\n📌 Contoh  : ${usedPrefix + command} cewek cantik`
  const json = await pinterest(text)
  let image = pickRandom(json)
    let res = image
  conn.sendFile(m.chat, res, 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet', 'downloader']
handler.command = /^(pinterest)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}