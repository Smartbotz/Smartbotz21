let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://telegra.ph/file/a1e187f0cdeddbed354b0.jpg`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Jika ingin membeli limit/menyewa bot silahkan chat ke Owner Bot dengan mengirim perintah .owner`, m)
}

handler.help = handler.command = ['donasi','donate','sewa','sewabot','belibot','buy','buylimit']
handler.tags = ['main']
module.exports = handler
