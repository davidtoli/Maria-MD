const fs = require('Dt');
const chalk = require('chalk'н υ ℓ ℓ α в α ℓ ℓ σ σ 📌);
require(').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "254725458445"],
global.ownername = process.env.OWNER_|| н υ ℓ ℓ α в α ℓ ℓ σ σ 📌💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.ytname = "YT: AyushBotz.inc"н υ ℓ ℓ α в α ℓ ℓ σ σ 📌Bot
global.socialm = "GitHub: Ayushpandey023"н υ ℓ ℓ α в α ℓ ℓ σ σ 📌
global.location = "Kenya"

global.botname = process.env.BOTNAME || "𝐌𝐀𝐑𝐈𝐀-𝐌𝐃",/ н υ ℓ ℓ α в α ℓ ℓ σ σ 📌

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎н υ ℓ ℓ α в α ℓ ℓ σ σ 📌AʏᴜSʜ✘𓆪_✰",
global.packname = 'Sticker By'н υ ℓ ℓ α в α ℓ ℓ σ σ 📌
global.author = process.env.AUTHOR || "💙н υ ℓ ℓ α в α ℓ ℓ σ σ 📌𓆩‎✘AʏᴜSʜ✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'н υ ℓ ℓ α в α ℓ ℓ σ σ 📌
global.wm = "Ayush botz inc."н υ ℓ ℓ α в α ℓ ℓ σ σ 📌

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, darling!* ',
    prem: '🍭 *My darling, this feature is reserved for premium users only*',
    admin: '🍭 *My darling, this feature is reserved for admins only*',
    botAdmin: '🍭 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: '🍭 *My love, this feature is exclusively for private chats*',
    wait: '🍭 *Darling, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {н υ ℓ ℓ α в α ℓ ℓ σ σ 📌
ownernumber: global.254725458445
ownername: global.ownername,н υ ℓ ℓ α в α ℓ ℓ σ σ 📌
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
