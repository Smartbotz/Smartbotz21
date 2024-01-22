const fetch = require('node-fetch');

let handler = async (m, { conn, text }) => {
  if (!text) throw `*_Masukan Nama Mahasiswa/Siswa Yang Ingin Kamu Cari !_*`;
  conn.reply(m.chat, 'Sedang mencari Orangnya... Silahkan tunggu', m);
  let res = await fetch('https://api-frontend.kemdikbud.go.id/hit_mhs/' + text);
  if (!res.ok) throw 'Tidak Ditemukan';
  let json = await res.json();
  let message = '';

  json.mahasiswa.forEach(data => {
    let nama = data.text;
    let websiteLink = data['website-link'];
    let website = `https://pddikti.kemdikbud.go.id${websiteLink}`;
    message += `\nNama = ${nama}\n\nData Ditemukan pada website = ${website}\n\n\n`;
  });
  conn.reply(m.chat, message, m);
}

handler.help = ['mhs <nama>','mhs <nim>'];
handler.tags = ['internet'];
handler.command = /^(mahasiswa|mhs|mhssiswa|msiswa|mhsiswa|pddikti|dikti)$/i;

module.exports = handler;
