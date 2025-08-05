const express = require('express');
const fs = require('fs-extra');
const { exec } = require("child_process");
let router = express.Router();
const pino = require("pino");
const { Boom } = require("@hapi/boom");

const MESSAGE = process.env.MESSAGE || `
𝐇𝐢 𝐁𝐄𝐍𝐙-𝐗𝐌𝐃 𝐮𝐬𝐞𝐫 𝐰𝐞'𝐫𝐞 𝐯𝐞𝐫𝐲 𝐭𝐡𝐫𝐢𝐥𝐥𝐞𝐝 𝐭𝐨𝐛𝐡𝐚𝐯𝐞 𝐲𝐨𝐮 𝐡𝐞𝐫𝐞

𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐜𝐡𝐨𝐨𝐬𝐧𝐠 𝐨𝐮𝐫 *𝐁𝐎𝐓*

𝐅𝐎𝐋𝐋𝐎𝐖 𝐎𝐔𝐑 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋

> 𝐀𝐥𝐩𝐡𝐚𝐊𝐢𝐧𝐠𝐓𝐞𝐜𝐡

https://whatsapp.com/channel/0029VajbiIfAjPXO45zG2i2c

> 𝐍𝐄𝐗𝐎𝐑𝐀 𝐓𝐄𝐂𝐇

https://whatsapp.com/channel/0029Vb6K4nw96H4LOMaOLF22

> 𝐅𝐎𝐑𝐊 𝐀𝐍𝐃 𝐒𝐓𝐀𝐑 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎

https://github.com/ALPHA-KING-TECH/BENZ-XMD-V1

> 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐞𝐁𝐞𝐧𝐳𝐓𝐞𝐜𝐡𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥🏻
`;

const { upload } = require('./mega');
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    DisconnectReason
} = require("@whiskeysockets/baileys");

// Ensure the directory is empty when the app starts
if (fs.existsSync('./auth_info_baileys')) {
    fs.emptyDirSync(__dirname + '/auth_info_baileys');
}

router.get('/', async (req, res) => {
    let num = req.query.number;

    async function SUHAIL() {
        const { state, saveCreds } = await useMultiFileAuthState(`./auth_info_baileys`);
        try {
            let Smd = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS("Safari"),
            });

            if (!Smd.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Smd.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            Smd.ev.on('creds.update', saveCreds);
            Smd.ev.on("connection.update", async (s) => {
                const { connection, lastDisconnect } = s;

                if (connection === "open") {
                    try {
                        await delay(10000);
                        if (fs.existsSync('./auth_info_baileys/creds.json'));

                        const auth_path = './auth_info_baileys/';
                        let user = Smd.user.id;

                        function randomMegaId(length = 6, numberLength = 4) {
                            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                            let result = '';
                            for (let i = 0; i < length; i++) {
                                result += characters.charAt(Math.floor(Math.random() * characters.length));
                            }
                            const number = Math.floor(Math.random() * Math.pow(10, numberLength));
                            return `${result}${number}`;
                        }

                        const mega_url = await upload(fs.createReadStream(auth_path + 'creds.json'), `${randomMegaId()}.json`);
                        const Id_session = mega_url.replace('https://mega.nz/file/', '');
                        const Scan_Id = Id_session;

                        // Send session ID
                        let msgsss = await Smd.sendMessage(user, { text: Scan_Id });

                        // Send banner image with caption as a forwarded message from the newsletter channel
                        await Smd.sendMessage(user, {
                            image: { url: "https://files.catbox.moe/3l444i.jpg" },
                            caption: MESSAGE,
                            contextInfo: {
                                forwardingScore: 999,
                                isForwarded: true,
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: "𝐒𝐞𝐜𝐔𝐧𝐢𝐭𝐃𝐞𝐯𝐬",
                                    body: "WhatsApp Channel",
                                    previewType: "PHOTO",
                                    thumbnailUrl: "https://files.catbox.moe/v8xb9l.jpg",
                                    mediaType: 1,
                                    mediaUrl: "https://files.catbox.moe/v8xb9l.jpg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VajbiIfAjPXO45zG2i2c"
                                }
                            }
                        }, { quoted: msgsss });

                        await delay(1000);
                        try { await fs.emptyDirSync(__dirname + '/auth_info_baileys'); } catch (e) { }

                    } catch (e) {
                        console.log("Error during file upload or message send: ", e);
                    }

                    await delay(100);
                    await fs.emptyDirSync(__dirname + '/auth_info_baileys');
                }

                if (connection === "close") {
                    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
                    if (reason === DisconnectReason.connectionClosed) {
                        console.log("Connection closed!");
                    } else if (reason === DisconnectReason.connectionLost) {
                        console.log("Connection Lost from Server!");
                    } else if (reason === DisconnectReason.restartRequired) {
                        console.log("Restart Required, Restarting...");
                        SUHAIL().catch(err => console.log(err));
                    } else if (reason === DisconnectReason.timedOut) {
                        console.log("Connection TimedOut!");
                    } else {
                        console.log('Connection closed with bot. Please run again.');
                        console.log(reason);
                        await delay(5000);
                        exec('pm2 restart qasim');
                    }
                }
            });

        } catch (err) {
            console.log("Error in SUHAIL function: ", err);
            exec('pm2 restart qasim');
            console.log("Service restarted due to error");
            SUHAIL();
            await fs.emptyDirSync(__dirname + '/auth_info_baileys');
            if (!res.headersSent) {
                await res.send({ code: "Try After Few Minutes" });
            }
        }
    }

    await SUHAIL();
});

module.exports = router;
