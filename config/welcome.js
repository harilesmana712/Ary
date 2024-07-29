// config/welcome.js

async function welcomeNewMember(conn, groupId, participants) {
    console.log('Running welcomeNewMember function');
    console.log('Group ID:', groupId);
    console.log('New participants:', participants);

    for (let participant of participants) {
        const welcomeMessage = `Selamat datang @${participant.split('@')[0]} di grup ini! Semoga betah dan jangan lupa perkenalkan diri.`;
        console.log('Sending welcome message to:', participant);
        await conn.sendMessage(groupId, { text: welcomeMessage, mentions: [participant] });
    }
}

module.exports = { welcomeNewMember };