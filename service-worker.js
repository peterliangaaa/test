/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c9948bcb2d1526775df8ed4a55438c9"
  },
  {
    "url": "about.html",
    "revision": "672333d7fbfd23df5682b153e8c8e382"
  },
  {
    "url": "assets/css/0.styles.12f0711b.css",
    "revision": "ab60142e362da3cfcc7bf9f22bb5ac4c"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.12740ec0.js",
    "revision": "0a05201440be82c4ac72995c2aaee152"
  },
  {
    "url": "assets/js/10.46cc88e7.js",
    "revision": "73c1f28275e69209edc9f7105c73b5d4"
  },
  {
    "url": "assets/js/11.64edbd15.js",
    "revision": "f2f54350c96a353ca54b63fd131c32ed"
  },
  {
    "url": "assets/js/12.78a493e5.js",
    "revision": "33bb43e922577d0f219c142bd8ccf006"
  },
  {
    "url": "assets/js/13.aa99401c.js",
    "revision": "bae7d9393ea56710d0881ca381c81ed5"
  },
  {
    "url": "assets/js/14.910a1192.js",
    "revision": "4fec2555c86e2110e59357777794fa00"
  },
  {
    "url": "assets/js/15.5480ce0a.js",
    "revision": "0213e6d4685b4a5222b7cdf4bc7b2480"
  },
  {
    "url": "assets/js/16.fc00c076.js",
    "revision": "d2356dfa74148490a7c4effedabdd160"
  },
  {
    "url": "assets/js/17.92da7dab.js",
    "revision": "2fc3420e295ccf592dcf2e0acf2a2f6f"
  },
  {
    "url": "assets/js/3.cc183d94.js",
    "revision": "882adb375a792c4f532a0b356f6e574e"
  },
  {
    "url": "assets/js/4.dd5c4a18.js",
    "revision": "6a6158149aca01ce96b657b6eff0e928"
  },
  {
    "url": "assets/js/5.3d64f971.js",
    "revision": "6c9dc7483c612f6608ecba69fa206a46"
  },
  {
    "url": "assets/js/6.5475257e.js",
    "revision": "a196fdc181c833ae8650df7a16065a1d"
  },
  {
    "url": "assets/js/7.5be8f320.js",
    "revision": "93c43c9584ed2d9bca8b652b97528024"
  },
  {
    "url": "assets/js/8.9abf8456.js",
    "revision": "ff1b00925f6d3cd305d6bd1f22279af6"
  },
  {
    "url": "assets/js/9.a403ae06.js",
    "revision": "287c95588b2157f56a4bc8fad67cb6ba"
  },
  {
    "url": "assets/js/app.cb6d9057.js",
    "revision": "960ffffad0255fd4cdad546ce387fffb"
  },
  {
    "url": "categories/FAQ/index.html",
    "revision": "daa4a1060d101c5e8292646f3a5f1ef7"
  },
  {
    "url": "categories/index.html",
    "revision": "5c64ab6e67ff30b10c1ecede40f9015d"
  },
  {
    "url": "faq/index.html",
    "revision": "ec57ea726b8c7e23edcb5b77945c8a5c"
  },
  {
    "url": "features/help.html",
    "revision": "0d251225c2163095f69871a0d15f6ac9"
  },
  {
    "url": "features/index.html",
    "revision": "db1419946a11a134ab18f589f75fa4ae"
  },
  {
    "url": "features/Pixiv.html",
    "revision": "630d4ba419127905c471e69dbcdbe58d"
  },
  {
    "url": "icons/favicon144.png",
    "revision": "c3258ba800a02ed0d788e99c72a2f377"
  },
  {
    "url": "icons/favicon192.png",
    "revision": "80afc1e17911532c93cb8637268d1bbb"
  },
  {
    "url": "icons/favicon48.png",
    "revision": "811da0e0a83246091d2cc380fe84a186"
  },
  {
    "url": "icons/favicon512.png",
    "revision": "ce21c96aceea3078edbb17160f44195f"
  },
  {
    "url": "icons/favicon72.png",
    "revision": "774b55d2b580031b720e7c03867ee2ad"
  },
  {
    "url": "icons/favicon96.png",
    "revision": "05df80e0bd02da9d7d6c0dae2a1e1821"
  },
  {
    "url": "img/hero.png",
    "revision": "abf3416c55d2fb966064d1f14eb29dbc"
  },
  {
    "url": "img/logo.png",
    "revision": "0cc478288d7f216ad5b9ee3730aaf6a3"
  },
  {
    "url": "img/SauceNAO.png",
    "revision": "7c96dc5254055628a50e71feb8fa64c1"
  },
  {
    "url": "img/状态.png",
    "revision": "23f18717ef352a21452c2320319db7b7"
  },
  {
    "url": "index.html",
    "revision": "b06dbaaf109c31a29cc13ddd7971263f"
  },
  {
    "url": "pixiv-token/cmd.png",
    "revision": "8378543e981cfa8c637e4143028e936f"
  },
  {
    "url": "pixiv-token/filter.png",
    "revision": "8d49e7a36ec73320cc088f24040bd9f8"
  },
  {
    "url": "pixiv-token/request.png",
    "revision": "19fb2103681a50b2d694820d1f983f0f"
  },
  {
    "url": "sponsor-qrcode/qrcode-alipay.png",
    "revision": "a6128053f374aea2a8877d478f44d300"
  },
  {
    "url": "sponsor-qrcode/qrcode-qq.png",
    "revision": "82b629dbc521ce9013ea68b38b464a9b"
  },
  {
    "url": "sponsor-qrcode/qrcode-wechat.png",
    "revision": "012bb035d7d8e93633a3ddecb5ca66ed"
  },
  {
    "url": "tag/index.html",
    "revision": "3c4ccc9cf798aac82359ba119afc438e"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fb3b10ca384536934eae2c71571a068"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
