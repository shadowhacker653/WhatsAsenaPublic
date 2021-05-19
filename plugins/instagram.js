/*
# Copyright (C) 2020 MuhammedKpln.
# edited by Vai838

# WhatsAsena is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# WhatsAsena is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#

*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');
const Asena = require('../events');
const got = require('got');
const fs = require('fs');
const IG_DESC = "Downloads Image/Video From Instagram"
const NEED_WORD = "Must Enter a link"
const FBDESC = "Downloads Video From FaceBook"
const LOADING = "Downloading the Video..."
const NOT_FOUNDFB = "Video Not Found"
const CAPTION = "Caption"

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')


if (cn.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        const userName = match[1]

        if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://videfikri.com/api/igstalk/?username=${userName}`)
          .then(async (response) => {
            const {
              profile_hd,
              username,
              bio,
              followers,
              following,
              full_name,
              is_private,
            } = response.data.result

            const profileBuffer = await axios.get(profile_hd, {
              responseType: 'arraybuffer',
            })

            const msg = `
            *${Lang.NAME}*: ${full_name}
            *${Lang.USERNAME}*: ${username}
            *${Lang.BIO}*: ${bio}
            *${Lang.FOLLOWERS}*: ${followers}
            *${Lang.FOLLOWS}*: ${following}
            *${Lang.ACCOUNT}*: ${is_private ? Lang.HIDDEN : Lang.PUBLIC}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )


    Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: true, desc: IG_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Downloading the Post..."))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "Made By WhatsAsenaPublic"
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By WhatsAsenaPublic"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Invaild Link, Please Enter a Vaild Instagram Link")),
      )
  },
)


    Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: true, desc: FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${CAPTION}*: ${judul}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By WhatsAsenaPublic"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)

}
else if (cn.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        const userName = match[1]

        if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://videfikri.com/api/igstalk/?username=${userName}`)
          .then(async (response) => {
            const {
              profile_hd,
              username,
              bio,
              followers,
              following,
              full_name,
              is_private,
            } = response.data.result

            const profileBuffer = await axios.get(profile_hd, {
              responseType: 'arraybuffer',
            })

            const msg = `
            *${Lang.NAME}*: ${full_name}
            *${Lang.USERNAME}*: ${username}
            *${Lang.BIO}*: ${bio}
            *${Lang.FOLLOWERS}*: ${followers}
            *${Lang.FOLLOWS}*: ${following}
            *${Lang.ACCOUNT}*: ${is_private ? Lang.HIDDEN : Lang.PUBLIC}`

          await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )

    Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: false, desc: IG_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Downloading the Post..."))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "Made By WhatsAsenaPublic"
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By WhatsAsenaPublic"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Invaild Link, Please Enter a Vaild Instagram Link")),
      )
  },
)


    Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${CAPTION}*: ${judul}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By WhatsAsenaPublic"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)

