const tempa = ['tempa1', 'tempa2', 'tempa3', 'tempa4', 'tempa5'];

async function handleToxicMessages(conn, msg) {
    for (const m of msg.messages) {
        // Pastikan pesan berasal dari grup
        if (m.key && m.key.remoteJid.endsWith('@g.us')) {
            const messageContent = m.message?.conversation || m.message?.extendedTextMessage?.text;

            if (messageContent) {
                const containsForbiddenWord = forbiddenWords.some(word => messageContent.toLowerCase().includes(word));
                
                if (containsForbiddenWord) {
                    const from = m.key.remoteJid;
                    const participant = m.key.participant;

                    // Menghapus pesan
                    await conn.sendMessage(from, { delete: m.key });
                    console.log(`Deleted message from ${participant} in group ${from}`);
                    
                    // Mengirim pesan balasan
                    await conn.sendMessage(from, { text: 'jangan toxic bro' }, { quoted: m });
                    console.log(`Sent warning message to ${participant}`);
                }
            }
        }
    }
}

module.exports = handleToxicMessages;