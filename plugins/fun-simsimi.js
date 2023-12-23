let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  try {
  let res = await fetch(`https://api.botcahx.live/api/search/simsimi?query=${encodeURIComponent(text)}&apikey=${btc}`)
  let json = await res.json()
  m.reply(json.result)
  } catch (e) {
  m.reply('Terjadi kesalahan')
  }
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler
