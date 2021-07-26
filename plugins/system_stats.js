/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "*𝕂𝔸𝕎𝔼𝔼𝕊ℍ𝔸❤️⃝➤⃟̱̱̱̱̄̄̄̄ˢᵐᵃʳᵗ ᵇᵒᵗ🔥*\ni'm still alive bro\nversion _ 1.3.2 Globle\nHosted _ Heroku\n\n*_MEMBER OF *☬ᴄyʙ⃢ᴇʀ ᴀʀ⃟ᴍy␍ ʀᴇᴘᴏʀᴛᴇʀꜱ_*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Made By ❤️⃝➤⃟̱̱̱̱̄̄̄̄ˢᵐᵃʳᵗ ᵇᵒᵗ🔥*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "*𝕂𝔸𝕎𝔼𝔼𝕊ℍ𝔸❤️⃝➤⃟̱̱̱̱̄̄̄̄ˢᵐᵃʳᵗ ᵇᵒᵗ🔥*\ni'm still alive bro\nversion _ 1.3.2 Globle\nHosted _ Heroku\n\n*_MEMBER OF *☬ᴄyʙ⃢ᴇʀ ᴀʀ⃟ᴍy␍ ʀᴇᴘᴏʀᴛᴇʀꜱ_*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Made By ❤️⃝➤⃟̱̱̱̱̄̄̄̄ˢᵐᵃʳᵗ ᵇᵒᵗ🔥*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
