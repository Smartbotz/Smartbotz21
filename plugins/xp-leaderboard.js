
const { areJidsSameUser } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(50, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
  let text = `
       ≡ *PAPAN PERINGKAT*
    
▢ *TOP ${len} XP* 🧬
Kamu : *Urutan ${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length} Orang*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `*${i + 1}.* ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ _*XP ${exp}*_`).join`\n`}

▢ *TOP ${len} Limit💎* 
Kamu : *Urutan ${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length} Orang*

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `*${i + 1}.* ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ _*Limit ${limit}*_`).join`\n`}

▢ *TOP ${len} LEVEL* ⬆️
Kamu : *Urutan ${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length} Orang*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `*${i + 1}.* ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ _*Level ${level}*_`).join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    mentions: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len)].filter(v => !participants.some(p => areJidsSameUser(v, p.id) )) 
})
 
}
handler.help = ['leaderboard']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top'] 

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
