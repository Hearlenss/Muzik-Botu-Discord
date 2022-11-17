module.exports = {
        px: '!',
        playing: 'mzkbotu',

    opt: {
        DJ: {
            enabled: false, //değiştirme
            roleName: 'DJ', //değiştime
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //DOKUNMA
        },
        maxVol: 250, //max ses ayarı
        loopMessage: false, //elleme
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //elleme
                highWaterMark: 1 << 25 //elleme
            }
        }
    }
};
