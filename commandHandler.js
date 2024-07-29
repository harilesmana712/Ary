// commandHandler.js
const { handleTempa1Command, handleTempa2Command, handleTempa3Command, handleTempa4Command, handleTempa5Command, handleTempa6Command, handleTempa7Command, handleTempa8Command } = require('./config/tempa');
const { handleHokiCommand } = require('./config/hoki');
const { handlePedoCommand } = require('./config/pedo');
const { mentionAll } = require('./config/tagall');

async function handleCommand(conn, message, content) {
    const tempa1Commands = ['tempa1', 'tempa2', 'tempa3', 'tempa4', 'tempa5'];
    const tempa2Commands = ['tempa6', 'tempa7', 'tempa8', 'tempa9', 'tempa10'];
    const tempa3Commands = Array.from({ length: 40 }, (_, i) => `tempa${i + 11}`);
    const tempa4Commands = Array.from({ length: 41 }, (_, i) => `tempa${i + 50}`);
    const tempa5Commands = Array.from({ length: 50 }, (_, i) => `tempa${i + 91}`);
    const tempa6Commands = Array.from({ length: 31 }, (_, i) => `tempa${i + 140}`);
    const tempa7Commands = Array.from({ length: 26 }, (_, i) => `tempa${i + 170}`);
    const tempa8Commands = Array.from({ length: 51 }, (_, i) => `tempa${i + 195}`);
    
    const commandPrefix = content[0];
    const command = content.slice(1).split(' ')[0];

    if (tempa1Commands.includes(command)) {
        await handleTempa1Command(conn, message, command);
    } 
    else if (tempa2Commands.includes(command)) {
        await handleTempa2Command(conn, message, command);
    }
    else if (tempa3Commands.includes(command)) {
        await handleTempa3Command(conn, message, command);
    } 
    else if (tempa4Commands.includes(command)) {
        await handleTempa4Command(conn, message, command);
    }
    else if (tempa5Commands.includes(command)) {
        await handleTempa5Command(conn, message, command);
    } 
    else if (tempa6Commands.includes(command)) {
        await handleTempa6Command(conn, message, command);
    } 
    else if (tempa7Commands.includes(command)) {
        await handleTempa7Command(conn, message, command);
    } 
    else if (tempa8Commands.includes(command)) {
        await handleTempa8Command(conn, message, command);
    } 
    else if (command === 'hoki') {
        await handleHokiCommand(conn, message);
    } 
    else if (command === 'pedo') {
        await handlePedoCommand(conn, message);
    } 
    else {
        const args = content.slice(command.length + 2).trim();

        switch (command) {
            case 'tagall':
                if (message.key.remoteJid.endsWith('@g.us')) {
                    console.log('Tagall command received');
                    await mentionAll(conn, message.key.remoteJid, args);
                }
                break;
            // Tambahkan case lain untuk perintah baru di sini
            default:
                console.log(`Unknown command: ${command}`);
        }
    }
}

module.exports = { handleCommand };