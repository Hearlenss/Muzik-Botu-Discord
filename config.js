module.exports = {
        px: '!',
        playing: 'mzkbotu',

    opt: {
        mzkbot: {
            enabled: false, //değiştirme
            roleName: 'mzkbot', //değiştime
            commands: ['geridön', 'temizle', 'filtrele', 'döngüyeal', 'durdur', 'devam', 'geç', 'dur', 'ses'] //DOKUNMA
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
