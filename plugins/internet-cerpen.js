let fetch = require('node-fetch');
const effects = ['remaja', 'anak', 'misteri', 'cinta' ,'budaya', 'romantis', 'galau', 'gokil', 'inspiratif', 'kehidupan', 'sastra', 'jepang', 'korea', 'keluarga', 'persahabatan', 'kristen', 'ramadhan', 'liburan', 'lingkungan', 'mengharukan', 'motivasi', 'perjuangan', 'nasihat', 'pendidikan', 'petualangan']

let handler = async (m, { conn, usedPrefix, text, command }) => {
let tema = text.trim().toLowerCase()
if (!effects.includes(tema)) throw `

┌─⊷ *List Tema*
${effects.map(tema => `▢ ${tema}`).join('\n')}
└───────────

📌 *Example:* 
${usedPrefix + command} remaja 
`.trim()
let apiUrl = await fetch(`https://api.botcahx.eu.org/api/story/cerpen?type=${text}&apikey=${btc}`)
var res = await apiUrl.json()
let caption = ` *Title*: ${res.result.title}\n *Author*: ${res.result.author}\n *Kategori*: ${res.result.kategori}\n *Lolos*: ${res.result.lolos}\n *Cerita*: ${res.result.cerita}`
conn.sendMessage(m.chat, { text: caption }, { quoted: m })
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = ['cerpen', 'ceritapendek'] 
handler.limit = 3

module.exports = handler
