const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `Masukkan apa yang ingin Anda telusuri \n\n📌*Contoh:*\n${usedPrefix + command} homero`
    
   let res = await fetch(`https://api.botcahx.live/api/search/sticker?text1=${text}&apikey=Smartbotz`)
   let json = await res.json()
   try {
    m.reply(`
✅ Hasil

▢ *Titel:* ${json.title}
▢ *Total stickers:* ${json.sticker_url.length}
▢ *Perkiraan waktu pengiriman:* _*${json.sticker_url.length * 2} s*_`)
    for (let i of json.sticker_url) {
        conn.sendImageAsSticker(m.chat, i, m, { packname: global.packname, author: global.author })
        //await delay(1500)
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

const delay = time => new Promise(res => setTimeout(res, time))
