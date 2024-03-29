const fetch = require('node-fetch');

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix}${command} https://pin.it/4CVodSq`;
  }
  if (!args[0].match(/pin/gi)) {
    throw `URL Tidak Ditemukan!`;
  }
  try {
    m.reply(wait);
    const api = await fetch(`https://api.botcahx.eu.org/api/download/pinterest?url=${args[0]}&apikey=${btc}`);
    const res = await api.json();
    let { media_type, image, title } = res.result.data;
    if (media_type === 'video/mp4') {
      await conn.sendMessage(m.chat, { video: { url: image } }, { quoted: m });
    } else {
      conn.sendMessage(m.chat, { image: { url: image }, caption:`*Title:* ${title}\n*Mediatype:* ${media_type}\n*Source Url*: ${image}\n`}, { quoted: m });
    }
  } catch (e) {
    console.log(e);
    throw `Terjadi kesalahan!`;
  }
};

handler.help = ['pindl'];
handler.command = /^(pindl|pin)$/i;
handler.tags = ['downloader'];
handler.limit = 5;
handler.premium = false;

module.exports = handler;
