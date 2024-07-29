// config/tagall.js

async function mentionAll(conn, groupId, customMessage) {
    const groupMetadata = await conn.groupMetadata(groupId);
    const participants = groupMetadata.participants;

    let mentions = participants.map(p => p.id);
    let mentionText = customMessage + '\n\n';

    for (let participant of participants) {
        mentionText += `@${participant.id.split('@')[0]} `;
    }

    await conn.sendMessage(groupId, { text: mentionText, mentions });
}

module.exports = { mentionAll };