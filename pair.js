const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function MALVIN_XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "malvin~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `𝐇𝐢 𝐁𝐄𝐍𝐙-𝐗𝐌𝐃 𝐮𝐬𝐞𝐫 𝐰𝐞'𝐫𝐞 𝐯𝐞𝐫𝐲 𝐭𝐡𝐫𝐢𝐥𝐥𝐞𝐝 𝐭𝐨𝐛𝐡𝐚𝐯𝐞 𝐲𝐨𝐮 𝐡𝐞𝐫𝐞

𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐜𝐡𝐨𝐨𝐬𝐧𝐠 𝐨𝐮𝐫 *𝐁𝐎𝐓*

𝐅𝐎𝐋𝐋𝐎𝐖 𝐎𝐔𝐑 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋

> 𝐀𝐥𝐩𝐡𝐚𝐊𝐢𝐧𝐠𝐓𝐞𝐜𝐡

https://whatsapp.com/channel/0029VajbiIfAjPXO45zG2i2c

> 𝐍𝐄𝐗𝐎𝐑𝐀 𝐓𝐄𝐂𝐇

https://whatsapp.com/channel/0029Vb6K4nw96H4LOMaOLF22

> 𝐅𝐎𝐑𝐊 𝐀𝐍𝐃 𝐒𝐓𝐀𝐑 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎

https://github.com/ALPHA-KING-TECH/BENZ-XMD-V1

> 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐞𝐁𝐞𝐧𝐳𝐓𝐞𝐜𝐡𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥🏻`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "ALPHA KING TECH",
thumbnailUrl: "https://files.catbox.moe/v8xb9l.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VajbiIfAjPXO45zG2i2c",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `𝐇𝐢 𝐁𝐄𝐍𝐙-𝐗𝐌𝐃 𝐮𝐬𝐞𝐫 𝐰𝐞'𝐫𝐞 𝐯𝐞𝐫𝐲 𝐭𝐡𝐫𝐢𝐥𝐥𝐞𝐝 𝐭𝐨𝐛𝐡𝐚𝐯𝐞 𝐲𝐨𝐮 𝐡𝐞𝐫𝐞

𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐜𝐡𝐨𝐨𝐬𝐧𝐠 𝐨𝐮𝐫 *𝐁𝐎𝐓*

𝐅𝐎𝐋𝐋𝐎𝐖 𝐎𝐔𝐑 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋

> 𝐀𝐥𝐩𝐡𝐚𝐊𝐢𝐧𝐠𝐓𝐞𝐜𝐡

https://whatsapp.com/channel/0029VajbiIfAjPXO45zG2i2c

> 𝐍𝐄𝐗𝐎𝐑𝐀 𝐓𝐄𝐂𝐇

https://whatsapp.com/channel/0029Vb6K4nw96H4LOMaOLF22

> 𝐅𝐎𝐑𝐊 𝐀𝐍𝐃 𝐒𝐓𝐀𝐑 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎

https://github.com/ALPHA-KING-TECH/BENZ-XMD-V1

> 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐞𝐁𝐞𝐧𝐳𝐓𝐞𝐜𝐡𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥🏻`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐊𝐈𝐍𝐆 𝐀𝐋𝐏𝐇𝐀 𝐓𝐄𝐂𝐇",
thumbnailUrl: "https://files.catbox.moe/v8xb9l.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VajbiIfAjPXO45zG2i2c",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    BENZ_XMD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await BENZ_XD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
