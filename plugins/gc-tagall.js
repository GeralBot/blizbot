let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝙼𝙴𝙽𝚂𝙰𝙹𝙴: ${pesan}`
let teks = `⺀𝙳𝙴𝚂𝙿𝙸𝙴𝚁𝚃𝙴𝙽 𝙿𝙻𝙰𝙽𝚃𝙰𝚂⺀ \n\n❏ ${oi}\n❏ 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🌱@${mem.id.split('@')[0]}\n`}
teks += `➥𝐆𝐞𝐫𝐚𝐥 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
