const fs = require('node:fs');

const config = {
    owner: ["6285796266854"],
    name: "ɢᴜɢᴜ-ɢᴀɢᴀ",
    ownername: 'ʟᴜᴛᴘɪ', 
    ownername2: 'ʀᴏʏ',
    prefix: [".", "?", "!", "/", "#"], //Tambahin sendiri prefix nya kalo kurang
    wwagc: 'https://chat.whatsapp.com/KgP745Llxh2Ae5lDRLa7o7',
    saluran: '', 
    jidgroupnotif: '', 
    saluran2: '', 
    jidgroup: '', 
    wach: '', 
    sessions: "session",
    sticker: {
      packname: "ɢᴜɢᴜ-ɢᴀɢᴀ",
      author: "lutpi"
    },
   messages: {
      wait: "*( Loading )* flis tunggu bentar",
      owner: "*( Denied )* apasih kamu bukan owner",
      premium: "*( Denied )* kamu bujan premium",
      group: "*( Denied )* khusus geruf",
      botAdmin: "*( Denied )* Kamu bujan atmin😂",
      grootbotbup: "*( Denied )* Jadiin atmin flis",
   },
   database: "hanako-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
