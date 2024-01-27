const youtube = require("yt-search");
let ytdl = require('ytdl-core');
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Url nya mana?'
  const isValid = await ytdl.validateURL(text);
    if (!isValid) {
        return m.reply("*your link not suported.*");
    }
  m.reply('_Proses..._')
  let url = `https://aemt.me/youtube?url=${text}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`
  conn.sendFile(m.chat, url, null, `*Youtube Downloader*`, m)
}
handler.command = handler.help = ['ytv2']
handler.tags = ['downloader']
handler.limit = 5
module.exports = handler
