global.owner = ['6281313499129']  
global.mods = ['6281575614241'] 
global.prems = ['6281313499129']
global.nameowner = 'Secret'
global.numberowner = '6281313499129' 
global.mail = 'support@Smaartbotz.my.id' 
global.gc = 'https://chat.whatsapp.com/Lsytu8X0bC3AoyKBY9cvJE'
global.instagram = 'https://instagram.com/faadlis'
global.wm = '© Smartbotz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error,Coba lagi*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'SmartBotz'
global.author = 'fdls'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'Smartbotz' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'Smartbotz'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
