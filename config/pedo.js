// config/pedo.js

function getRandomPercentage() {
    return Math.floor(Math.random() * 100) + 1;
}

async function handlePedoCommand(conn, message) {
    const percentage = getRandomPercentage();
    let response = `Pedoness: ${percentage}%\n`;

    if (percentage <= 25) {
        response += "Aman";
    } else if (percentage <= 60) {
        response += "Hati-hati";
    } else {
        response += "Pedo bajingan jauh-jauh";
    }

    await conn.sendMessage(message.key.remoteJid, { text: response });
}

module.exports = { handlePedoCommand };