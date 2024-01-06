let handler = async (m, { conn }) => {
  let wm = global.wm;
  let _uptime = process.uptime() * 1000;
  let uptimex = clockString(_uptime);
  conn.sendFile(
    m.chat,
    "https://aemt.me/file/nN1QV1Rx45dP.opus",
    "nN1QV1Rx45dP.opus",
    null,
    m,
    true,
    {
      type: "audioMessage",
      ptt: false,
      seconds: 9000,
      contextInfo: {
        externalAdReply: {
          body: null,
          containsAutoReply: true,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceId: null,
          sourceType: "PDF",
          previewType: "PDF",
          sourceUrl: null,
          thumbnailUrl:
            "https://i.pinimg.com/originals/46/c1/44/46c144d496b2786dbbc96479f562196f.jpg",
          title: "🗿"
        }
      }
    }
  );
};

handler.help = ["mode"];
handler.tags = ["main"];
handler.customPrefix = /^(ah|babi|sialan|stress|mboh|MBOH|serah|terserah|ajg|anjg|asw|bangsat|bgst|ngntd|tolol|kntl)$/i;
handler.command = new RegExp();
handler.limit = false;

module.exports = handler;

function clockString(ms) {
  let days = Math.floor(ms / (24 * 60 * 60 * 1000));
  let daysms = ms % (24 * 60 * 60 * 1000);
  let hours = Math.floor(daysms / (60 * 60 * 1000));
  let hoursms = ms % (60 * 60 * 1000);
  let minutes = Math.floor(hoursms / (60 * 1000));
  let minutesms = ms % (60 * 1000);
  let sec = Math.floor(minutesms / 1000);
  return `${days} Hari ${hours} Jam ${minutes} Menit ${sec} Detik`;
}
