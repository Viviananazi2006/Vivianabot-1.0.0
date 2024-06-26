const { default : makeWAvmet , DisconnectReason , useMultiFileAuthState , makeInMemoryStore , downloadContentFromMessage , prepareWAMessageMedia, Browsers } = require('@whiskeysockets/baileys')
const { Boom } = require('@hapi/boom')
const P = require('pino')
const path = require('path');
const clc = require("cli-color")
const cfonts = require('cfonts')
const ytSearch = require('yt-search');
const ytdl = require('ytdl-core');
const { PassThrough } = require('stream');
const chalk = import('chalk')
const cheerio = require('cheerio')
const fs = require('fs')
const util = require("util")
const ffmpeg = require("fluent-ffmpeg")
const axios = require('axios')
const { savefrom, facebookdl, facebookdlv2 } = require('@bochilteam/scraper') 
const { exec, spawn, execSync } = require("child_process")
const TelegraPh = require('./Archivos/telegraPh.js')
const {videoToWebp,writeExifImg,writeExifVid,imageToWebp} = require('./Archivos/stickersss.js')
const author = "꫞ 𝑁𝑎𝑧𝑖 𝑉𝑖𝑣𝑖𝑎𝑛𝑎 𝑑𝑒𝑔𝑢𝑟𝑒𝑐ℎ𝑎𝑓𝑓 ꫞"
const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`}
const getBuffer = (url, options) => new Promise(async (resolve, reject) => {
    options ? options : {}
    await axios({ method: "get", url, headers: { "DNT": 1, "Upgrade-Insecure-Request": 1 }, ...options, responseType: "arraybuffer" }).then((res) => {
        resolve(res.data)
    }).catch(reject)
})
const sett =JSON.parse(fs.readFileSync('./config.json'))

const { owner , status , botName } = sett[0]

const readline = require("readline");
const NodeCache = require('node-cache');
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const msgRetryCounterCache = new NodeCache();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
  
const banner = cfonts.render("Viviana | Bot", {
    font: 'pallet',
    align: 'center',
    gradient: ["green","blue"]
})
const color = (text, color) => { return !color ? clc.bold(text) : clc.bold(text) }

             /*
             @ Js
            */
const { 
addReg , checkReg , 
coins , addCoin , delCoin, //addCoin(usuario , cantidad)
vip , addVip , delVip // addVip(usuario)
} = require('./Archivos/Grupo/Js/_reg.js')

const { 
addTTT , 
movP1 , 
movP2,
checkWinner,
tableroTTT,
checkTTT,
checkTurno,
delTTT,
checkTimeOff,
checkTTTOff,
expiredTTT,
expiredTTTOff, checkUserTTT1 , checkUserTTT2
} = require('./Archivos/Games/Js/tictactoe.js')

const {
addGrupo , 
delGrupo , 
checkGrupo , 
expiredGrupo
} = require('./Archivos/Grupo/Js/_grupo.js')

const {
addAnti_link ,
delAnti_link , 
checkAnti_link ,
links , 
addLink }  = require('./Archivos/Grupo/Js/anti_link.js')

 // JSON
 const Exportion = JSON.parse(fs.readFileSync('./Archivos/Games/Json/Exportion.json'))
 const Exportion1 = JSON.parse(fs.readFileSync('./Archivos/Games/Json/Exportion1.json'))
 const Cuestions = JSON.parse(fs.readFileSync('./Archivos/Games/Json/cuestions.json'))
 
const prefixo = "."

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

async function connectToWhatsApp () {
const store = makeInMemoryStore({ logger: P().child({ level: "silent", stream: "store" })})
console.log(banner.string)
console.log(`gracias por usar viviana-bot`)
const { state, saveCreds } = await useMultiFileAuthState('./qr-seccion')
  
  //conexion

const vm = makeWAvmet({
      auth: state,
      logger: P({ level: 'silent' }),
      auth: state,
      browser: Browsers.ubuntu('Chrome'),
      patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message?.interactiveMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            };
         }
         return message;
      }
    });
     
 module.exports = { vm }

function limparNumero(entrada) {
    const numeros = entrada.replace(/\D/g, '');
    let numeroLimpo;
    if (numeros.startsWith('54')) {
        numeroLimpo = numeros.replace(/^549?(\d{2})(15)?(\d{8})$/, '549$1$3');
    } else if (numeros.startsWith('52')) {
        numeroLimpo = numeros.replace(/^52(1)?(\d{10})$/, '521$2');
    } else {
        numeroLimpo = numeros;
    }
    return numeroLimpo;
}

    if (!vm.authState.creds.registered) {
        const phoneNumber = await question(`\n𝐕𝐈𝐕𝐈𝐀𝐍𝐀 | 𝐁𝐎𝐓\n𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 𝐕𝐈𝐕𝐈𝐀𝐍𝐀 \n𝐃𝐈𝐆𝐈𝐓𝐄 𝐒𝐔 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 \n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : ${clc.bold("+52 999 999 999")}\n `);
        const numeroLimpo = limparNumero(phoneNumber);
        const code = await vm.requestPairingCode(numeroLimpo);
        console.log(`𝐒𝐔 𝐂𝐎𝐃𝐈𝐆𝐎 𝐃𝐄 𝐂𝐎𝐍𝐄𝐗𝐈𝐎𝐍 𝐄𝐒 : \n\n ${clc.bold(code)}\n~>`);
        console.log(`𝐀𝐁𝐑𝐀 𝐒𝐔 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏, 𝐕𝐀𝐘𝐀  𝐀  ${clc.bold("Dispositivos Conectados > Conectar un nuevo Dispositivo > Conectar usando Número.")}`)
    }

    store.bind(vm.ev)
    vm.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if(connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
            console.log('𝐄𝐑𝐑𝐎𝐑 𝐄𝐍 𝐋𝐀 𝐂𝐎𝐍𝐒𝐎𝐋𝐀  ', lastDisconnect.error, ', 𝐑𝐄𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐍𝐃𝐎 ', shouldReconnect)
            if(shouldReconnect) {
                connectToWhatsApp()
            }
        } else if(connection === 'open') {
            console.log(
            color('\n 𝐁𝐎𝐓 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐃𝐎 𝐄𝐗𝐈𝐓𝐎𝐒𝐀𝐌𝐄𝐍𝐓𝐄','lime')
         )
        }
    })
      
 vm.ev.on ('creds.update', saveCreds)   
 
 store.bind(vm.ev)

vm.ev.on('chats.set', () => {
    console.log('Team chats', store.chats.all())
})

vm.ev.on('contacts.set', () => {
    console.log('Team contactos', Object.values(store.contacts))
})

vm.ev.on('messages.upsert', async m => {
try {
const info = m.messages[0]
if (!info.message) return 
if (info.key && info.key.remoteJid == "status@broadcast") return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
var budy = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const body = (type === "conversation") ? info.message.conversation : (type === "viewOnceMessageV2") ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : (type === "imageMessage") ? info.message.imageMessage.caption : (type === "videoMessage") ? info.message.videoMessage.caption : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : (type === "viewOnceMessage") ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : (type === "documentWithCaptionMessage") ? info.message.documentWithCaptionMessage.message.documentMessage.caption : (type === "buttonsMessage") ? info.message.buttonsMessage.imageMessage.caption : (type === "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : (type === "listResponseMessage") ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type === "templateButtonReplyMessage") ? info.message.templateButtonReplyMessage.selectedId : (type === "groupInviteMessage") ? info.message.groupInviteMessage.caption : (type === "pollCreationMessageV3") ? info.message.pollCreationMessageV3 : (type === "interactiveResponseMessage") ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type === "text") ? info.text : "" 

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

// CONSTANTES IS  
const isGrupo = info.key.remoteJid.endsWith('@g.us')
const sender = isGrupo ? info.key.participant : info.key.remoteJid
const groupMetadata = isGrupo ? await vm.groupMetadata(from) : ''
const groupName = isGrupo ? groupMetadata.subject : ''
const groupDesc = isGrupo ? groupMetadata.desc : ''
const groupMembers = isGrupo ? groupMetadata.participants : ''
const groupAdmins = isGrupo ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? vm.sendMessage(from, {text: teks.trim(), mentions: memberr}) : vm.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const name = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false

const owners =  await owner ? owner : []
const isOwner = await owners.some( i => sender.includes(i))

const BotNumber = vm.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl2 = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Cancun', hour12: false }
const data = new Date().toLocaleDateString('MX', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('MX', options) 
 
 // CONSTANTES NUEVAS
 
 
 
  const runtime = function(seconds) {
    seconds = Number(seconds);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Utilizando Math.floor() para asegurar que los segundos sean enteros
    const parts = [];    
    if (days > 0) {
        parts.push(days + (days === 1 ? " 𝙳𝙸𝙰" : " 𝙳𝙸𝙰𝚂"));
    }
    if (hours > 0) {
        parts.push(hours + (hours === 1 ? " ʜᴏʀᴀ" : " ʜᴏʀᴀs"));
    }
    if (minutes > 0) {
        parts.push(minutes + (minutes === 1 ? "  ᴍɪɴᴜᴛᴏ" : " ᴍɪɴᴜᴛᴏs"));
    }
   if (remainingSeconds > 0) {
    parts.push(remainingSeconds + (remainingSeconds === 1 ? " sᴇɢᴜɴᴅᴏ" : " sᴇɢᴜɴᴅᴏs"));
    }    
    return parts.join(', ');
}


const enviartexto = (texto) => {
 vm.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
const enviarsms = (texto) => {
vm.sendMessage(from,{text : texto , contextInfo: {
      mentionedJid: [sender],
      "externalAdReply": {
        "title": '𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺',
        "body": 'ғᴏʟʟᴏᴡ ᴍᴇ',
        "showAdAttribution": true,
        "thumbnailUrl": 'https://telegra.ph/file/e54c3c51008493dbcdf52.jpg',
        "sourceUrl": 'https://www.facebook.com/profile.php?id=100088330814766'
      }
    }})
    }
 
const enviarimagen = (imagen) => {
 vm.sendMessage(from,{ image : imagen }, {quoted : info})
 }
 
const enviarimagencap = (imagen,caption) => {
 vm.sendMessage(from,{ image : imagen ,caption : caption}, {quoted : info})
 }
 
const enviarvideos = (videos) => {
 vm.sendMessage(from,{ video : video ,mimetype: 'video/mp4' ,ppt: true, caption : caption}, {quoted : info})
}
 
const enviarvideoscap = (videos,caption) => {
 vm.sendMessage(from,{ video : videos ,caption : caption}, {quoted : info})
}
 
const enviarmusica = (audios) => {
 vm.sendMessage(from,{ audio : musica ,mimetype: 'audio/mp4' ,ppt: true,}, {quoted : info})
 }
 
 const enviarsticker = (sticker) => {
 vm.sendMessage(from,{ sticker : sticker }, {quoted : info})
 }
 
 const enviardocumentos = (documento) => {
 vm.sendMessage(from,{document : documento },{quoted : info})
 }
 
 const send = (text , num) => {
     vm.sendMessage(from , {
            text : text , 
            mentions : [ num ? num : '']
            }, { quoted : info})          
          }
          
 const vcard = 
'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN: 💂⃟𝕍𝕀𝕍𝕀𝔸ℕ𝔸 💚\n' 
+ 'ORG: 🥀 ɪɴғᴏʀᴍᴀʀᴛɪᴄᴀ ;\n'
+ 'TEL;type=CELL;type=VOICE;waid=50586893230:++57 300 5570367\n'
+ 'END:VCARD'

vm.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return vm.sendMessage(jid, { poll: { name, values, selectableCount }}) }

const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await vm.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await vm.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})
 
 // CONSTANTES ISSS 
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")
const mimetype = require('mime-types')
const getExtension = async (type) => {
	return await mimetype.extension(type)}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
 
 // RESPUESTAS
 const respuesta = {
 espere : "espera un momento mientras proceso tu pedido",
 }
 
 
             /*
              @ Const Is
            */
            
  const isReg = await checkReg(sender)
  const isVip = await vip(sender)
  const isTTT = await checkTTT(from)
  const isTttOff = await checkTTTOff(sender)
  const isAnti_link = await checkAnti_link(from)  
 const Links = links(from)
 const isUrl = Links ? Links.some(i => body.includes(i)) : false
 
  const isMuteGp = await checkGrupo(from)

  const coin = await coins(sender)
  
// MENSAJES EN CONSOLA 
 
if(isGrupo && comando && !info.key.fromMe){
console.log( 
color('\n  ╭ ── ✦ き⃟⃟「','lime'),color('  𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ','cyan'),color('」き⃟⃟  ✦ ── ╮','lime'),
color('\n    √ • ❏   ⃟ᴄᴏᴍᴀɴᴅᴏ','lime'),color(` : ${comando}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴀᴍᴇ ', 'lime'),color(`: ${name}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴜᴍᴇʀᴏ ','lime'),color(` : ${sender.split('@')[0]}`,'aqua'),
color('\n    √ • ❏   ⃟ʜᴏʀᴀ ','lime'),color(`: ${hora}`,'aqua'),
color('\n    √ • ❏   ⃟ɢʀᴜᴘᴏ ','lime'),color(`: ${groupName}`,'aqua'),
color('\n  ╰ ── ✦ き⃟⃟「','lime'),color(' 𝐆𝐑𝐎𝐔𝐏 ╰‿╯ ','cyan'),color('」き⃟⃟  ✦ ──╯','lime')
)
} 

if(isGrupo && !comando && !info.key.fromMe){
console.log( 
color('\n  ╭ ── ✦ き⃟⃟「','lime'),color('  𝐌𝐄𝐍𝐒𝐀𝐉𝐄  ','cyan'),color('」き⃟⃟  ✦ ── ╮','lime'),
color('\n    √ • ❏   ⃟ᴍᴇɴsᴀɢᴇ','lime'),color(` : ${args[0]}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴀᴍᴇ ', 'lime'),color(`: ${name}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴜᴍᴇʀᴏ ','lime'),color(` : ${sender.split('@')[0]}`,'aqua'),
color('\n    √ • ❏   ⃟ʜᴏʀᴀ ','lime'),color(`: ${hora}`,'aqua'),
color('\n    √ • ❏   ⃟ɢʀᴜᴘᴏ ','lime'),color(`: ${groupName}`,'aqua'),
color('\n  ╰ ── ✦ き⃟⃟「','lime'),color(' 𝐆𝐑𝐎𝐔𝐏 ╰‿╯ ','cyan'),color('」き⃟⃟  ✦ ──╯','lime')
)
}
      // 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 
if(!isGrupo && comando && !info.key.fromMe){
console.log( 
color('\n  ╭ ── ✦ き⃟⃟「','lime'),color('   𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ','cyan'),color('」き⃟⃟  ✦ ── ╮','lime'),
color('\n    √ • ❏   ⃟ᴄᴏᴍᴀɴᴅᴏ','lime'),color(` : ${comando}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴀᴍᴇ ', 'lime'),color(`: ${name}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴜᴍᴇʀᴏ ','lime'),color(` : ${sender.split('@')[0]}`,'aqua'),
color('\n    √ • ❏   ⃟ʜᴏʀᴀ ','lime'),color(`: ${hora}`,'aqua'),
color('\n  ╰ ── ✦ き⃟⃟「','lime'),color(' 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 ╰‿╯ ','cyan'),color('」き⃟⃟  ✦ ──╯','lime')
)
} 

if(!isGrupo && !comando && !info.key.fromMe){
console.log( 
color('\n  ╭ ── ✦ き⃟⃟「','lime'),color('   𝐌𝐄𝐍𝐒𝐀𝐉𝐄  ','cyan'),color('」き⃟⃟  ✦ ── ╮','lime'),
color('\n    √ • ❏   ⃟ᴍᴇɴsᴀɢᴇ','lime'),color(` : ${args[0]}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴀᴍᴇ ', 'lime'),color(`: ${name}`,'aqua'),
color('\n    √ • ❏   ⃟ɴᴜᴍᴇʀᴏ ','lime'),color(` : ${sender.split('@')[0]}`,'aqua'),
color('\n    √ • ❏   ⃟ʜᴏʀᴀ ','lime'),color(`: ${hora}`,'aqua'),
color('\n  ╰ ── ✦ き⃟⃟「','lime'),color(' 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 ╰‿╯ ','cyan'),color('」き⃟⃟  ✦ ──╯','lime')
)
}    


if (!fs.existsSync(path.join(__dirname, 'tmp'))) {
    fs.mkdirSync(path.join(__dirname, 'tmp'));
}
 
 expiredTTT()
    expiredTTTOff()
    expiredGrupo()
   
   if(isMuteGp && !isOwner){
   if(isCmd) return 
   }
   
   
   if(fs.existsSync(`./tmp/ttt_${from}.json`)){
   if(['acepto','.asepto','Acepto'].some(i => body.startsWith(i))){
   if(!isReg) return send('registrese para poder jugar')
   if(isTttOff) return send('ᴜsᴛᴇᴅ ʏᴀ ᴀ ᴊᴜɢᴀᴅᴏ ᴀɴᴛᴇʀɪᴏʀᴍᴇɴᴛᴇ')
   const ruta = `./tmp/ttt_${from}.json`
   const TTT = JSON.parse(fs.readFileSync(ruta))
   if(TTT.user1 === sender) return    
   TTT.user2 = sender
  fs.writeFileSync(ruta,JSON.stringify(TTT , null,2)+'\n') 
     sleep(500)   
   const { user1 , user2 } = TTT  
   await addTTT(vm, user1, user2 , from , info)
    sleep(500)
    fs.unlinkSync(ruta)
   }
   }
   
   
switch(comando){

 case 'bot' : {
 if(!isOwner) return send('no eres mi creador')
 if(args[0] === 'on') {
 if(status === true ) return send('el bot ya esta on')
  sett[0].status = true
 fs.writeFileSync("./config.json",JSON.stringify(sett, null,2)+'\n')
 send('el bot empezó a funcionar')
 } else if(args[0] === 'off'){
  if(status === false ) return send('el bot ya esta off')
  sett[0].status = false
 fs.writeFileSync("./config.json",JSON.stringify(sett, null,2)+'\n')
 send('el bot dejo de funcionar')
 } else { send('on para prender y off para apagar') }
 }
 
default :
}


if(status === false && isGrupo ){
if(comando || isCmd) return 
}

switch(comando) {

case 'hi' : 
send('holi')
break 

case 'reg' :
try {
if(isReg) return send('ya se registro')
if(!isGrupo) return send('solo en grupos')
 await addReg(sender , name)
 send('🔄 registrando ....')
 await sleep(300)
 const teks = ` 
 registro exitoso 
`
 await send(teks)
} catch (e) {
console.log(e)
}
break 

case 'perfil' :
try {
const teks = `
registrado : ${isReg ? 'si' : 'no'}
vip : ${isVip ? 'si' : 'no'}
coins: ${coin}
`
send(teks)
} catch (e) {
console.log(e)
}
break 

case 'addvip' : {
try {
const men = info?.message?.extendedTextMessage.contextInfo?.mentionedJid[0]  || info?.message?.extendedTextMessage?.contextInfo?.participant
 
if(!isOwner) return send('lo siento no eres mi creador')
if(!men) return send('tague el sms de alguien')
if(!checkReg(men)) return send(`@${men.split('@')[0]} no se encuentra registrado`, men)
if(vip(men)) return send(`@${men.split('@')[0]} ya es un user vip`, men)

await addVip(men)

const teks = `
el usuario @${men.split('@')[0]}
fue agregado a los usuarios vip por
@${sender.split('@')[0]}
`
            vm.sendMessage(from , {
                  text : teks,
               mentions : [men , sender]
                },{quoted : info})
} catch (e) {
console.log(e)
}
}
break 


case 'delvip' : {
try {
const men = info?.message?.extendedTextMessage.contextInfo?.mentionedJid[0]  || info?.message?.extendedTextMessage?.contextInfo?.participant

if(!isOwner) return send('lo siento no eres mi creador')
if(!men) return send('tague el sms de alguien')
if(!checkReg(men)) return send(`@${men.split('@')[0]} no se encuentra registrado`, men)
if(!vip(men)) return send(`@${men.split('@')[0]} ya no es un user vip`, men)

await delVip(men)

const teks = `
el usuario @${men.split('@')[0]}
fue removido de los usuarios vip por
@${sender.split('@')[0]}
`
            vm.sendMessage(from , {
                  text : teks,
               mentions : [men , sender]
                },{quoted : info})
} catch (e) {
console.log(e)
}
}

break 


case 'addcoin' :  case 'darcoin' : {
try {
const men = info?.message?.extendedTextMessage.contextInfo?.mentionedJid[0]  || info?.message?.extendedTextMessage?.contextInfo?.participant

if(!isOwner) return send('lo siento no eres mi creador')
if(!men) return send('tague el sms de alguien')
if(!checkReg(men)) return send(`@${men.split('@')[0]} no se encuentra registrado`, men)
if(!args[0] || isNaN(args[0])) return send('coloque una cantidad que desea agregar')
await addCoin(men , args[0]*1 )
const teks = `
@${sender.split('@')[0]} le dio +${args[0]} coins 
al usuario @${men.split('@')[0]}
`
            vm.sendMessage(from , {
                  text : teks,
               mentions : [men , sender]
                },{quoted : info})
} catch (e) {
console.log(e)
}
}
break 
/// [ CONVERTIDORES ] ///

case 'figu': case "figu2" : case "stickergif":  case "stickergif2": case "s": case "f": case "fig": case "sticker":

if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
enviartexto(respuesta.espere)
 try {             
streammmmm = await downloadContentFromMessage(info.message.imageMessage || info.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of streammmmm) {
     buffer = Buffer.concat([buffer, chunk])
    }
    let ran = 'stickers.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./database/${ran} -o ./${ran}`, async (error) => {
       await enviarfiguimg(from, fs.readFileSync(`./${ran}`), info, {
 packname: `${name}`, author: `${author}`
})
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	"scale=512:512:force_original_aspect_ratio=decrease,fps=15, pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)	 
    } catch(e) {
console.log(e)
enviartexto("😒 *Ni para remarcar una imagen sirves*")
}} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
enviartexto(respuesta.espere)
try {

const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: `${name}`, author: `${author}`
}) 
fs.unlinkSync(rane)
} catch(e) {
console.log(e)
enviartexto("😒 *Ni para remarcar una imagen sirves*")
}}
break

case 'toimg': case 'Toimg': case 'TOIMG':

if(!isQuotedSticker) return enviartexto('Por favor, *mencione un sticker* para ejecutar el comando.')
try {
enviartexto(respuesta.espere)
const toimgq = '꫞ 𝑁𝑎𝑧𝑖 𝑉𝑖𝑣𝑖𝑎𝑛𝑎 𝑑𝑒𝑔𝑢𝑟𝑒𝑐ℎ𝑎𝑓𝑓 ꫞'
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
vm.sendMessage(from, {image: buff,caption : toimgq}, {quoted: info}).catch(e => {
console.log(e);
enviartexto('Ocurrio un error no convirtió *sticker para imagen.*')
})
} catch {
enviartexto(respuesta.error())
}
break
/// [ DOWNLOAD ] ///

case 'ytmp4': case 'ytmp3': case 'play': case 'Ytmp4': case 'Ytmp3': case 'Play': case 'YTMP4': case 'YTMP3': case 'PLAY': {
    if (!q) return vm.sendMessage(from, { text: 'Ingrese una url/busqueda despues del comando.'})
    async function search(query) {
        const search = await ytSearch(query);
        
        const result = search.videos.map(item => ({
            type: 'video',
            title: item.title,
            url: `https://www.youtube.com/watch?v=${item.videoId}`,
            id: item.videoId,
            Thumbnail: item.image,
            author: { name: item.author.name, url: item.author.url },
            description: item.description,
            views: item.views,
            duration: item.duration,
            date: item.ago
        }));
        return result
    }

    async function searchUrl(url) {
        const regex = /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}).*/;
        const splitUrl = regex.test(url) ? regex.exec(url)[1] : url
        const videoInfo = await ytdl.getInfo('https://www.youtube.com/watch?v=' + splitUrl, { lang: 'id' });
        const format = ytdl.chooseFormat(videoInfo.formats, { format: 132, filter: 'videoandaudio' })
        const result = {
            type: 'video',
            title: videoInfo.videoDetails.title,
            url: 'https://www.youtube.com/watch?v=' + splitUrl,
            id: url,
            Thumbnail: videoInfo.videoDetails.thumbnails.slice(-1)[0],
            author: videoInfo.videoDetails.ownerChannelName,
            description:videoInfo.videoDetails.description,
            contentLength: format.contentLength,
            duration: videoInfo.videoDetails.lengthSeconds,
            date: videoInfo.videoDetails.publishDate,
            quality: format.qualityLabel,
        }
        return result;
    }


    function downloadVideo(url) {
        const outputPath = path.join(__dirname, 'tmp', 'ytmp4.mp4');
        return new Promise((resolve, reject) => {
            ytdl(url, { filter: 'audioandvideo', quality: 'highestvideo' })
                .pipe(fs.createWriteStream(outputPath))
                .on('finish', () => { resolve(`Video descargado a ${outputPath}`) })
                .on('error', (err) => reject(err));
        });
    }
    function downloadAudio(url) {
        const outputPath = path.join(__dirname, 'tmp', 'ytmp3.mp3');
        return new Promise((resolve, reject) => {
            ytdl(url, { filter: 'audioonly', quality: 'highestaudio' })
                .pipe(fs.createWriteStream(outputPath))
                .on('finish', () => { resolve(`Audio descargado a ${outputPath}`) })
                .on('error', (err) => reject(err));
        });
    }
    function urlDecoded(url) {
        const regex = /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}).*/;
        const match = url.match(regex);
        return match ? { status: true, id: match[1] } : { status: false };
    }
    if (deviceType === 'Android') {
        if (["ytmp4", "YTMP4", "Ytmp4"].includes(comando)) {
            const url = await urlDecoded(q)
            console.log(url)
            if (url.status) {
                const result = await searchUrl(q)
                // TEST BOT console.log('1-- ' + result + '\n\n' + url.id)
                await downloadVideo(result.url)
                // await vm.sendMessage(from, { video: { url: './tmp/ytmp4.mp4' }, caption: 'send video'})
                let media = await prepareWAMessageMedia({ video: {url: './tmp/ytmp4.mp4' } }, { upload: vm.waUploadToServer });
                await vm.relayMessage(from, {
                    botInvokeMessage: {
                        message: {
                            messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} },
                            interactiveMessage: {
                                header: {
                                    title: 'Viviana Bot Vip',
                                    hasMediaAttachment: true,
                                    videoMessage: media.videoMessage
                                },
                                headerType: 'VIDEO',
                                body: { text: `info`, }, footer: { text: `footer` },
                                nativeFlowMessage: {
                                    buttons: [
                                        { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Site\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },
                                        { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Canal\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },                                     
                                    ],
                                    messageParamsJson: "",
                                    
                                },
                            },
                            
                        },
                        
                    },
                    contextInfo: {externalAdReply : {title : ``, renderLargerThumbnail:false, showAdAttribution: false, body: ``, mediaUrl: `` , mediaType: 2, thumbnail: "" }}
                }, {quoted: info}).then((r) => console.log(r));
            } else {
                const result = await search(q)
                // TEST BOT 2console.log('2-- ' + result + '\n\n' + url.id)
                await downloadVideo(result[0].url)
                // await vm.sendMessage(from, { video: { url: './tmp/ytmp4.mp4' }, caption: 'send video'})
                let media = await prepareWAMessageMedia({ video: {url: './tmp/ytmp4.mp4' } }, { upload: vm.waUploadToServer });
                await vm.relayMessage(from, {
                    botInvokeMessage: {
                        message: {
                            messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} },
                            interactiveMessage: {
                                header: { title: 'Viviana Bot Vip', hasMediaAttachment: true, videoMessage: media.videoMessage },
                                headerType: 'VIDEO',
                                body: { text: `info`, }, footer: { text: `footer` },
                                nativeFlowMessage: {
                                    buttons: [
                                        { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Site\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },
                                        { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Canal\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },                                     
                                    ],
                                    messageParamsJson: "",
                                    
                                },
                            },
                            
                        },
                        
                    },
                    contextInfo: {externalAdReply : {title : ``, renderLargerThumbnail:false, showAdAttribution: false, body: ``, mediaUrl: `` , mediaType: 2, thumbnail: "" }}
                }, {quoted: info}).then((r) => console.log(r));
            }
        } else if (["ytmp3", "YTMP3", "Ytmp3"].includes(comando)) {
            const url = await urlDecoded(q)
            if (url.status) {
                const result = await searchUrl(q)
                await downloadAudio(result.url)
                await vm.sendMessage(from, { audio: { url: './tmp/ytmp3.mp3' }, mimetype: 'audio/mp4', caption: 'send audio'})
            } else {
                const result = await search(q)
                await downloadAudio(result[0].url)
                await vm.sendMessage(from, { audio: { url: './tmp/ytmp3.mp3' }, mimetype: 'audio/mp4', caption: 'send audio'})
            }
        } else if (["play", "Play", "PLAY"].includes(comando)) {
            const data = await search(q)
            const result = data[0]
            await downloadVideo(result.url)
            let media = await prepareWAMessageMedia({ image: {url: result.Thumbnail } }, { upload: vm.waUploadToServer });
            await vm.relayMessage(from, {
                interactiveMessage: {
                    header: { title: 'Viviana Bot Vip', hasMediaAttachment: true, imageMessage: media.imageMessage },
                    headerType: 'IMAGE',
                    body: { text: `aqui va la info del video`}, footer: { text: `el footer`},
                    nativeFlowMessage: {
                        buttons: [
                            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "Download Mp4", id: `.ytmp4 ${result.url}` })},
                            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "Download Mp3", id: `.ytmp3 ${result.url}` })} 
                        ],
                        messageParamsJson: "",
                    },
                },
            }, {})
        }
    } else if (!deviceType === 'Android') {
        if (["ytmp4", "YTMP4", "Ytmp4"].includes(comando)) {
            const url = await urlDecoded(q)
            console.log(url)
            if (url.status) {
                const result = await searchUrl(q)
                console.log('1-- ' + result + '\n\n' + url.id)
                await downloadVideo(result.url)
                await vm.sendMessage(from, { video: { url: './tmp/ytmp4.mp4' }, caption: 'send video'})
            } else {
                const result = await search(q)
                console.log('2-- ' + result + '\n\n' + url.id)
                await downloadVideo(result[0].url)
                await vm.sendMessage(from, { video: { url: './tmp/ytmp4.mp4' }, caption: 'send video'})
            }
        } else if (["ytmp3", "YTMP3", "Ytmp3"].includes(comando)) {
            const url = await urlDecoded(q)
            if (url.status) {
                const result = await searchUrl(q)
                await downloadAudio(result.url)
                await vm.sendMessage(from, { audio: { url: './tmp/ytmp3.mp3' }, mimetype: 'audio/mp4', caption: 'send audio'})
            } else {
                const result = await search(q)
                await downloadAudio(result[0].url)
                await vm.sendMessage(from, { audio: { url: './tmp/ytmp3.mp3' }, mimetype: 'audio/mp4', caption: 'send audio'})
            }
        } else if (["play", "Play", "PLAY"].includes(comando)) {
            
        }
    }
    break
}

case 'tiktok':
case 'tt': {
    if (!q) return enviartexto("ingrese una url")
    const clean = data => {
        let regex = /(<([^>]+)>)/gi
        data = data.replace(/(<br?\s?\/>)/gi, ' \n')
        return data.replace(regex, '')
    }
    
    async function shortener(url) {
        return url
    }
    
    const Tiktok = async (query) => {
        let response = await axios('https://lovetik.com/api/ajax/search', {
            method: 'POST',
            data: new URLSearchParams(Object.entries({ query }))
        })
        let result = {}
        result.creator = 'YNTKTS'
        result.title = clean(response.data.desc)
        result.author = clean(response.data.author)
        result.nowm = await shortener((response.data.links[0].a || '').replace('https', 'http'))
        result.watermark = await shortener((response.data.links[1].a || '').replace('https', 'http'))
        result.audio = await shortener((response.data.links[2].a || '').replace('https', 'http'))
        result.thumbnail = await shortener(response.data.cover)
        return result
    }
    
    if (deviceType === 'Android') {
        Tiktok(q).then(async (data) => {
            let media = await prepareWAMessageMedia({ video: {url: data.watermark } }, { upload: vm.waUploadToServer });
            await vm.relayMessage(from, {
                botInvokeMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} },
                        interactiveMessage: {
                            header: { title: 'TikTok Vip', hasMediaAttachment: true, videoMessage: media.videoMessage },
                            headerType: 'VIDEO',
                            body: { text: data.author, }, footer: { text: data.title },
                            nativeFlowMessage: {
                                buttons: [
                                    { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Site\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },
                                    { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Canal\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },                                     
                                ],
                                messageParamsJson: "",
                            }
                        }
                    }
                }
            }, { quoted: info }).then((r) => console.log(r));
        })
        
    } else if (!deviceType === 'Android') {
        vm.sendMessage(from, { video: { url: media.nowm }, caption: `○ *Autor:* ${media.author}\n○ *Titulo:* ${media.title}` })
    } 
    break
}

case 'instagram':
case 'ig': {
}
break

case 'facebook':
case 'fb': {
    if (!q) return enviartexto('falta url')
    if (deviceType === 'Android') {
        const { result } = await facebookdl(q).catch(async () => await facebookdlv2(q)).catch(async () => await savefrom(q))
        for (const { url, isVideo } of result.reverse()) await vm.sendMessage(from, {video: {url: url}, caption: '🍟 Video de facebook'}, {quoted: info })
    } else {}
    break
}

case 'foto': {
    const foto = async (querry) => {
        return new Promise(async (resolve, reject) => { 
            axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, { headers: { "cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"}
        }).then(({ data }) => {
            const $ = cheerio.load(data)
            const result = [];
            const hasil = [];
            $('div > a').get().map(b => {
                const link = $(b).find('img').attr('src')
                result.push(link)
            });
            result.forEach(v => {
                if (v == undefined) return 
                hasil.push(v.replace(/236/g, '736'))
            })
            hasil.shift();
            resolve(hasil)
        })})
    }
    const data = await foto(q)
    if (deviceType === 'Android') {
        let media = await prepareWAMessageMedia({ image: {url: data[0] } }, { upload: vm.waUploadToServer });
        await vm.relayMessage(from, {
            interactiveMessage: {
                header: { title: 'Viviana Bot Vip', hasMediaAttachment: true, imageMessage: media.imageMessage },
                headerType: 'IMAGE',
                body: { text: `(ФωФ) Viviana - Bot, Mientras tu estas de regreso, nosotros ya conquistamos polonia.`}, footer: { text: `○ Resultado: ${q}`},
                nativeFlowMessage: {
                                buttons: [
                                    { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Site\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },
                                    { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Canal\",\"url\":\"https://exa.mx\",\"merchant_url\":\"https://exa.mx\"}" },                                     
                                ],
                                messageParamsJson: "",
                            }
            },
            
        }, {})
    } else {
      elsock.sendMessage(from, { image: { url : data[0] }})
    }
    
}
break
/*
    @media
*/


/// [TIC TAC TOE]

case 'ttt' : case 'tictactoe' :{
if(q) return 
const isGameOff = await checkTTTOff(sender)
const ruta = `./tmp/ttt_${from}.json`
if(!isGrupo) return send('solo en grupos')
if(isTTT) return send('ya hay una partida en progreso')
if(fs.existsSync(ruta)) return send('*ッ ʏᴀ ʜᴀʏ ᴜɴᴀ ᴘᴀʀᴛɪᴅᴀ ᴄʀᴇᴀᴅᴀ*')
if(isGameOff) {
const timeGameOff = await checkTimeOff(sender)
const ahora = Date.now()
const result = timeGameOff - ahora 
const total = result / 1000
return send(`ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴀ ᴊᴜɢᴀʀ :
ᴇsᴘᴇʀᴇ : ${runtime(total)} `)
} else {
const obj = {
user1 : sender,
user2 : false
}
fs.writeFileSync(ruta,JSON.stringify(obj, null,2)+'\n')


const teks = `
 *╭ ─╺╺─「 ᴡᴀɪᴛɪɴɢ ᴘʟᴀʏᴇʀ 」─╼╺ ─ ╮*
    ▢ Player 1 : @${sender.split('@')[0]}
    ▢ Player 2 : 🔃 _ᴇsᴘᴇʀᴀɴᴅᴏ..._
    ▢ Fecha : ahorita 
    ▢ Apuesta : 50
    ▢ Digite ✎ : Acepto  para jugar 
 *╰╶╺╸╺╾ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╼╸╺╸╶ ╯*  
` 
await send(teks , sender)


setTimeout(() => {
if(fs.existsSync(ruta)){
fs.unlinkSync(ruta)
}
},5* 60* 1000)

}
}
break 


case 'mov' : case 'mover' : {
const isTurno = await checkTurno(from)
const user1 = await checkUserTTT1(from)
const user2 = await checkUserTTT2(from)
if(!isGrupo) return 
if(!isTTT) return 
if(!user1 === sender || !user2 === sender) return send('hbnnvh')
if(isTurno === 'player1'){
if(args[0] === 'a1' || args[0] === 'a2' || args[0] === 'a3' || args[0] === 'b1' || args[0] === 'b2' || args[0] === 'b3' || args[0] === 'c1' || args[0] === 'c2' || args[0] === 'c3'){
await movP1(sender , args[0])
 sleep(500)
 await tableroTTT(vm , from , info , sender)
 sleep(500)
 await checkWinner(vm , from , info)
 
} else {
await send('[❌] movimiento invalido')
}
} else if(isTurno === 'player2'){
if(args[0] === 'a1' || args[0] === 'a2' || args[0] === 'a3' || args[0] === 'b1' || args[0] === 'b2' || args[0] === 'b3' || args[0] === 'c1' || args[0] === 'c2' || args[0] === 'c3'){
await movP2(sender , args[0])
 sleep(500)
 await tableroTTT(vm , from , info , sender)
 sleep(500)
 await checkWinner(vm , from , info)


} else {
await send('[❌] movimiento invalido')
}

} else {
await send('Error inesperado')
}
}
break 



case 'casino':
if(!isReg) return send('Usa .reg para registrarte')
if(!q) return send('[❗] ᴄᴏʟᴏǫᴜᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴀ ᴀᴘᴏsᴛᴀʀ ')
const monto = args[0]
 if(isNaN(monto)) return await send('ᴇʟ ᴍᴏɴᴛᴏ ᴅᴇʙᴇ sᴇʀ ᴜɴ ɴᴜᴍᴇʀᴏ')
 if(monto > coin) return send('ɴᴏ ᴄᴜᴇɴᴛᴀ ᴄᴏɴ ᴇsᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇ ᴄᴏɪɴs')
 if(monto > 51 ) return send('Maximo permitido 50 coins')
 var prob = Exportion[Math.floor(Math.random() * Exportion.length)]
var prob1 = Exportion1[Math.floor(Math.random() * Exportion1.length)]
 var prob2 = Exportion1[Math.floor(Math.random() * Exportion1.length)]                     
                       
if((prob === "🍓 : 🍓 : 🍓" || prob === "🍑 : 🍑 : 🍑" || prob === "🍉 : 🍉 : 🍉" || prob === "🍊 : 🍊 : 🍊" || prob === "🥭 : 🥭 : 🥭" || prob === "🍋 : 🍋 : 🍋" || prob === "🥝 : 🥝 : 🥝" || prob === "🫐 : 🫐 : 🫐" || prob === "🍇 : 🍇 : 🍇" || prob === "🍏 : 🍏 : 🍏" || prob === "🍐 : 🍐 : 🍐" || prob === "🍌 : 🍌 : 🍌" || prob === "🥥 : 🥥 : 🥥" || prob === "🍒 : 🍒 : 🍒")) {
              var Victoria = true 
              var Victori = "【✔】Gano  🎉"
            } else {
              var Victoria = false
              var Victori = "【✘】ᴘᴇʀᴅɪᴏ 😿"
            }
             
     var casssino = [
`
        ❐ 🍌 : 🍇 : 🍒

        ❐ 🍊 : 🍌 : 🥝

        ❐ 🍎 : 🫐 : 🍇
        
         🎰 ɢɪʀᴀɴᴅᴏ 🎰
`,
 `
        ❐ 🍊 : 🍌 : 🥝
 
        ❐ 🍎 : 🫐 : 🍇
 
        ❐ 🫐 : 🍊 : 🍌
 
         🎰 ɢɪʀᴀɴᴅᴏ 🎰
 `,
 `
        ❐ 🍎 : 🫐 : 🍇
 
        ❐ 🫐 : 🍊 : 🍌
 
        ❐ 🍉 : 🥭 : 🍋
 
         🎰 ɢɪʀᴀɴᴅᴏ 🎰
 `,
 `
        ❐ ${prob1}
 
        ❐ ${prob} 
 
        ❐ ${prob2} 
        
       ${Victori}
 `

]
let { key } = await vm.sendMessage(from, {text: `    🎰 ɢɪʀᴀɴᴅᴏ  ᴛʀᴀɢᴀᴍᴏɴᴇᴅᴀs 🎰`}, {quoted: info})

for(let i = 0 ; i < casssino.length; i++) {
await vm.sendMessage(from, {text: casssino[i], edit: key }, {quoted: info})

await new Promise(resolve => 
setTimeout (resolve , 1000))
}
       if (Victoria === true ) {
            const montoo = monto * 2
              send('*ғᴇʟɪᴄɪᴅᴀᴅᴇs Ganaste* : ' +montoo + ' *coins*')             
             await addCoin(sender,montoo)
            } else {
            const montooo = monto * 1
            send(`*Lo siento perdiste* : ${montooo} coins`)
       await delCoin(sender,montooo)
            }
            break
            
            
case 'game': 
if(!isReg) return send(`registrate usando .reg`)
if(fs.existsSync(`./tmp/Game_${from}.json`)) return send('ya se encuentra un juego activo en este Grupo') 
try {
const Probab = Math.floor(Math.random()*Cuestions.length)
await fs.writeFileSync(`./tmp/Game_${from}.json`, JSON.stringify(Cuestions[Probab]))
await sleep(100)
const Gm = JSON.parse(fs.readFileSync(`./tmp/Game_${from}.json`)) 
const party = ` 
  * Cuestion - 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰* : 
  _*${Gm.pregunta}*_
  √ Recompensa :
     • 10 Coins `
    send(party)
setTimeout(async () => {
if(fs.existsSync(`./tmp/Game_${from}.json`)){
send(`La partida fue cerrada : \n Respuesta : ${Gm.respuesta}`)
await fs.unlinkSync(`./tmp/Game_${from}.json`)

}
}, 5* 60* 1000)
} catch (e){
console.log(e)
}
break

            
            
            
case 'tagall' : {
 if(!isGrupo) return
 if(!isGroupAdmins) return 
 men_ = []
 let teks = 'Miembros del Grupo \n'
 for(let men of groupMembers){
   teks += `• @${men.id.split('@')[0]}\n`
   men_.push(men.id,true)
 }
 teks += 'Total : ' + groupMembers.length;
   
 vm.sendMessage(from , { 
    text : teks,
    mentions : men_
 },{quoted : info})
}
break
  
  case 'open' : 
  case 'abrir' :
  case 'ver' : {
 
const img = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage

const vid = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage

const audio = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage

if(!isGrupo) return 
if(!isGroupAdmins) return send('no eres un administrador')
if(!isBotGroupAdmins) return send('el bot debe ser administrador')
if (img) {
  send('[✅] Espere un momento por favor')
img.viewOnce = false
img.image = { url : img.url }
img.caption += ' - img revelada ╰‿╯-'
await vm.sendMessage(from , img , {quoted : info})
} else if (vid) {
  send('[✅] Espere un momento por favor')
vid.viewOnce = false
vid.video = { url : vid.url }
vid.caption += ' - video revelado ╰‿╯ -'
await vm.sendMessage(from , vid , {quoted : info})
} else if (audio) {
    send('[✅] Espere un momento por favor')
audio.viewOnce = false
audio.audio = { url : audio.url }
await vm.sendMessage(from , audio , {quoted : info})
} else {
  send('Marque un video , imagen o audio de una sola visualización')
}
  }
break 
    
case 'mute' : {
if(!isOwner) return 
if(args[0] === 'on') {
    if(isMuteGp) return send('El grupo ya esta muteado')
    await addGrupo(from)
    send('El grupo fue muteado')
} else if (args[0] === 'off') {
if(!isMuteGp) return send('El grupo ya esta desmuteado')
await delGrupo(from)
send('El grupo fue desmuteado')
} else {
send('seleccione on/off')
}
}
break 
   
case 'antilink' : {
  if(!isGrupo) return send('solo en grupos')
  if(!isBotGroupAdmins) return send('El bot necesita ser administrador')
  if(!isGroupAdmins) return send('No eres un administrador')
  if(args[0] === 'on') {
       if(isAnti_link) return send('El anti_link ya esta activo')
        await addAnti_link(from,groupName)
        await send('Anti_link activado exitosamente')
    } else if(args[0] === 'off') {
       if(!isAnti_link) return send('El anti_link ya esta desactivado')
        await delAnti_link(from)
        await send('Anti_link desactivado exitosamente')
    } else {
    await send('coloque : on/off')
    }
}
break
// COMANDOS SIN PREFIJO
default:




} 
 
 
 
 if(isUrl) { 
  if(!isAnti_link) return 
  if(isGroupAdmins|| !isGrupo) return 
  await vm.groupParticipantsUpdate(from, [sender], 'remove')
vm.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
  }
 
 
 
 
 
} catch (e) {
 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
 
 
 }
 
 
 
        
    })





    
}
// run in main file
connectToWhatsApp()
