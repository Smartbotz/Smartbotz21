const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `Masukkan apa yang ingin Anda telusuri \n\n📌*Contoh:*\n${usedPrefix + command} homero`
    
    try {
   const api = await fetch(`https://api.botcahx.live/api/search/sticker?text1=${args[0]}&apikey=${btc}`)
   const res = await api.json()
    m.reply(`
✅ Hasil

▢ *Titel:* ${res.result.title}
▢ *Total stickers:* ${res.result.sticker_url.length}
▢ *Perkiraan waktu pengiriman:* _*${res.result.sticker_url.length * 2} s*_`)
    for (let i of res.result.sticker_url) {
        await sleep(1500) 
        conn.sendImageAsSticker(m.chat, i, m, { packname: global.packname, author: global.author })
    }
   } catch (e) {
	m.reply(`Kesalahan: Coba yang lain`)
 } 
}
handler.help = ['getsticker']
handler.tags = ['sticker']
handler.command = ['getsticker', 'getstick', 'stickersearch', 'sticksearch'] 
handler.limit = 3
handler.private = true

module.exports = handler

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const delay = time => new Promise(res => setTimeout(res, time))
