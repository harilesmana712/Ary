// config/tempa.js

async function handleTempa1Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buatlah pedang pendek hingga level 5" });
}

async function handleTempa2Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buatlah adventur garb/ baju pengelana hingga level 10 \n bahan : \n sayap burung 50 stk drop: \n monster :\n beak \n lokasi: \n kuil runtuh" });
}

async function handleTempa3Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buatlah hard knuckel hingga level 50 \n bahan: \n pelat abu-abu 32 stk \n minyak jernih murni 8 stk \n monster : \n bone dragonwt \n black jelly \n lokasi : \n makam ratu kuno  " });
}

async function handleTempa4Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buatlah pedang indigo hingga level 90 \n bahan: \n sirip pedang panas 32 stk \n pedang cacat 8 stk \n monster : \n baby salamander \n ksatria terkontrol \n lokasi : \n graben membara atas \n istana gelap A2" });
}

async function handleTempa5Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buatlah tombak baskara hingga level 140 \n bahan : \n prasasti bersinar \n halo terputus \n monster : \n kubus kodrat \n malaikat gelembung (biru)/blue angel \n lokasi : kuil para dewa A2" });
}

async function handleTempa6Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buatlah bakung lelaba merah hingga level 170 \n bahan : \n kulit ular aneh \n kristal merah kehitaman \n monster : coofer \n lokasi : \n reruntuhan kota rokoko " });
}

async function handleTempa7Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buatlah senjata kaisar iblis disarankan buat knuckle nya \n bahan : \n drop dari venena kecil  monster : \n venena coenubia \n lokasi : \n istana ultimea:takhta " });
}

async function handleTempa8Command(conn, message, command) {
    await conn.sendMessage(message.key.remoteJid, { text: "buat senjata aniversary" });
}

module.exports = { handleTempa1Command, handleTempa2Command, handleTempa3Command, handleTempa4Command, handleTempa5Command, handleTempa6Command, handleTempa7Command, handleTempa8Command };