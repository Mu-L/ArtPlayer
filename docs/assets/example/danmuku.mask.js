// npm i artplayer-plugin-danmuku-mask
// import artplayerPluginDanmukuMask from 'artplayer-plugin-danmuku-mask';

var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    autoSize: true,
    fullscreen: true,
    fullscreenWeb: true,
    autoOrientation: true,
    plugins: [
        artplayerPluginDanmuku({
            danmuku: '/assets/sample/danmuku.xml'
        }),
        artplayerPluginDanmukuMask({
            //
        }),
    ],
});