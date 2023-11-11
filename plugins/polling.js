let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text.includes('|')) throw `tidak ada format \n\nContoh: ${usedPrefix + command} siap|kamu|aku`

  var name = await conn.getName(m.sender)
  var a = []
  var b = text.split('|')
  for (let c = 1 || 0; c < b.length; c++) {
  a.push([b[c]])
}

return conn.sendMessage(m.chat, { poll: { name: `polling request dari ${name}\n\nPesan: ${text.split('|')[0]}`, values: a }});
}

handler.command = handler.help = ['poll', 'polling']
handler.tags = ['group']
handler.group = true
handler.admin = true

module.exports = handler