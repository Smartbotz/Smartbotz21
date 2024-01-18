let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('✅ Tautan grup telah berhasil disetel ulang\n\n📌 Tautan baru:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['revoke', 'resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
