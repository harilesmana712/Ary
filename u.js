const { makeWASocket, DisconnectReason, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { welcomeNewMember } = require('./config/welcome');
const { handleCommand } = require('./commandHandler');

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    const conn = makeWASocket({
        auth: state,
        printQRInTerminal: true, // Pastikan ini disetel ke true untuk mencetak QR di terminal
        qrTimeout: 60 * 60 * 24 * 365 // Set timeout QR code menjadi 1 tahun (3600 detik * 24 jam * 365 hari)
    });

    conn.ev.on('creds.update', saveCreds);

    conn.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log('QR code:', qr);
        }

        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('opened connection');
        }
    });

    // Event listener untuk pesan yang masuk
    conn.ev.on('messages.upsert', async (msg) => {
        const messages = msg.messages;
        if (messages && messages.length > 0) {
            const message = messages[0];
            const content = message?.message?.conversation || 
                            message?.message?.extendedTextMessage?.text || 
                            message?.message?.imageMessage?.caption || 
                            "";

            // Panggil fungsi untuk menangani perintah
            await handleCommand(conn, message, content);
        }
    });

    // Event listener untuk anggota baru yang masuk ke grup
    conn.ev.on('group-participants.update', async (update) => {
        if (update.action === 'add') {
            console.log('New participants added:', update.participants);
            await welcomeNewMember(conn, update.id, update.participants);
        }
    });
}

// Jalankan fungsi utama
connectToWhatsApp();