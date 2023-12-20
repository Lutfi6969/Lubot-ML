import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6289644048756', 'Lubot-ML', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6289644048756'
global.packname = 'Lubot-ML'
global.author = '© Xyroinee'
global.namebot = '​Lubot-ML'
global.wm = '© Luthfi'
global.stickpack = 'Luthfi'
global.stickauth = '© Luthfi Ganteng'
global.fotonya = 'https://telegra.ph/file/f82a7e100758c82e3a123.png'
// Link Sosmed
global.sig = 'https://www.instagram.com/luth.fi9869/'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/Ea7QFT3VVDnF3qegUlgidz'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '089644048756'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'apikeymu'
global.rose = 'apikeymu'
global.xyro = 'apikeymu'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

