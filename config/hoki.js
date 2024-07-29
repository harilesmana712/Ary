// config/hoki.js

function getRandomPercentage() {
    return Math.floor(Math.random() * 100) + 1;
}

async function handleHokiCommand(conn, message) {
    const percentage = getRandomPercentage();
    const response = `Hokimu: ${percentage}%`;
    await conn.sendMessage(message.key.remoteJid, { text: response });
}

module.exports = { handleHokiCommand };