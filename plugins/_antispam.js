module.exports = {  before: async function all(m) {    let user = db.data.users[m.sender]    let chat = db.data.chats[m.chat]    if ((m.chat.endsWith('broadcast') || m.fromMe) && !m.message && !chat.isBanned) return    if (!m.text.startsWith('.') && !m.text.startsWith('#') && !m.text.startsWith('!') && !m.text.startsWith('/') && !m.text.startsWith('\/')) return    if (user.banned) return    this.spam = this.spam ? this.spam: {}    if (m.sender in this.spam) {            this.spam[m.sender].count++            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam >= 3) {                if (this.spam[m.sender].count >= 2) {                    user.banned = true                    var detik = 15000 * 2                    var now = new Date() * 1                    if (now < user.lastBanned) user.lastBanned += detik                    else user.lastBanned = now + detik                    const remainingCooldown = Math.ceil((user.lastBanned - now) / 1000)                    m.reply(`*乂 Spam Command Terdeteksi!*\n\nSilahkan Tunggu ${remainingCooldown} Detik Untuk Menggunakan Command Kembali`)                }                this.spam[m.sender].count = 0                this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()            }    } else        this.spam[m.sender] = {        jid: m.sender,        count: 0,        lastspam: 0    }}}