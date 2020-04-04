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
    "url": "assets/css/0.styles.e8c91c83.css",
    "revision": "b9ff9cc37331158b5af529ad3264037f"
  },
  {
    "url": "assets/img/1.7e1db593.png",
    "revision": "7e1db5932a2c77ae21d1a43658740d7c"
  },
  {
    "url": "assets/img/11.c5c08d41.png",
    "revision": "c5c08d41d176a6236d023effc1560ad1"
  },
  {
    "url": "assets/img/12.75aaa91e.png",
    "revision": "75aaa91eae44e66c67389f803548c481"
  },
  {
    "url": "assets/img/2.546ac487.png",
    "revision": "546ac4870845bdae1fd686965ff8f306"
  },
  {
    "url": "assets/img/3.3b8e3c37.png",
    "revision": "3b8e3c373419b75d1b713e52a6c2fcaa"
  },
  {
    "url": "assets/img/4.daa6eaf2.png",
    "revision": "daa6eaf2671a7c3b139bc403af33488b"
  },
  {
    "url": "assets/img/5.a3a628ab.png",
    "revision": "a3a628ab01f201989621296ac8051437"
  },
  {
    "url": "assets/img/6.0ded2d21.png",
    "revision": "0ded2d214d0678ef97dc903786846996"
  },
  {
    "url": "assets/img/bgm.52ef496c.png",
    "revision": "52ef496c6da155ea78b35a6a56f0300c"
  },
  {
    "url": "assets/img/blog.3e05c04a.svg",
    "revision": "3e05c04a69a1437e95c640102feca339"
  },
  {
    "url": "assets/img/bushu.7d8ab006.png",
    "revision": "7d8ab006a2d68c68f588166e972f7b37"
  },
  {
    "url": "assets/img/darkBgm.4b951b61.png",
    "revision": "4b951b614825b06b4f765a5bf615d499"
  },
  {
    "url": "assets/img/default.081119b7.png",
    "revision": "081119b755f2691b4d949a8f2708c9b3"
  },
  {
    "url": "assets/img/git.ed1b27e2.png",
    "revision": "ed1b27e2436975c5e100187d353dceb7"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-blog.7765e6eb.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "assets/img/kanbannaing_1.9d4605aa.png",
    "revision": "9d4605aa2583bf47e34fd44310d28da7"
  },
  {
    "url": "assets/img/kanbanniang_2.ef1f6e5b.png",
    "revision": "ef1f6e5bd64755096091089e16cd6baa"
  },
  {
    "url": "assets/img/log.21d903cb.png",
    "revision": "21d903cb410d4267131ca273e3e849b2"
  },
  {
    "url": "assets/img/new_us.2d9e091d.png",
    "revision": "2d9e091d43fbd1e4009c425163e1e4a6"
  },
  {
    "url": "assets/img/new.d0fd418c.png",
    "revision": "d0fd418ce5a764c7814ad69696862657"
  },
  {
    "url": "assets/img/resend.c5b493be.png",
    "revision": "c5b493becde3617241e3b6c5dd635034"
  },
  {
    "url": "assets/img/rvcode_qq.e2cae62f.png",
    "revision": "e2cae62f60f6a125cacfca17298f2858"
  },
  {
    "url": "assets/img/self_work.c28ec026.png",
    "revision": "c28ec026880fc6cee275dd944266eb89"
  },
  {
    "url": "assets/img/setLogin.8b86a266.png",
    "revision": "8b86a266c09a9ed34c5bf0043b96307a"
  },
  {
    "url": "assets/img/setRule.59a883c3.png",
    "revision": "59a883c3d75dceb6170e80ed43dccf26"
  },
  {
    "url": "assets/img/today.484a4d22.svg",
    "revision": "484a4d22a4aa9be93c18433c5ff3903f"
  },
  {
    "url": "assets/img/tomorrow.81f0b143.svg",
    "revision": "81f0b143cf6df495fb5f1ba4b32da0a4"
  },
  {
    "url": "assets/img/yesterday.8e49f298.svg",
    "revision": "8e49f298844ce8a7235c197d5d12e4c4"
  },
  {
    "url": "assets/js/1.0d151a4a.js",
    "revision": "56986e34c09eb53574b92a10c86962b9"
  },
  {
    "url": "assets/js/10.207df6f2.js",
    "revision": "7f1727f853e7e68a87666a70ed1aea02"
  },
  {
    "url": "assets/js/100.c7c0fcbb.js",
    "revision": "525179a759d14010590cd930df43fa6f"
  },
  {
    "url": "assets/js/101.e767194f.js",
    "revision": "ba911919d1cc6a63336ccff6bbf0754b"
  },
  {
    "url": "assets/js/102.90ef9614.js",
    "revision": "6544ccd22be7f0717789363c9ef6461b"
  },
  {
    "url": "assets/js/103.52cebe4e.js",
    "revision": "346964a931e9330d5522a754e9760aed"
  },
  {
    "url": "assets/js/104.6eb46d1a.js",
    "revision": "d35aff460c728ad0be8ffe1254840a8a"
  },
  {
    "url": "assets/js/105.0cfe07bd.js",
    "revision": "b49195a85a8903384cbc7f34d4fa3870"
  },
  {
    "url": "assets/js/106.7964fac1.js",
    "revision": "230f307b50f51d6b12bbf324cd1755ed"
  },
  {
    "url": "assets/js/107.f9620144.js",
    "revision": "968cb6c0152959eb7318250230b61ebd"
  },
  {
    "url": "assets/js/108.c4e8c901.js",
    "revision": "6e8cfa15fc21eec50b746eab6820ba0a"
  },
  {
    "url": "assets/js/109.42b83b16.js",
    "revision": "6dbf9736328700d53e744cbf749fb1da"
  },
  {
    "url": "assets/js/11.f7ede489.js",
    "revision": "b64d79fd08b751c114ccbc3575c057dc"
  },
  {
    "url": "assets/js/110.03593d86.js",
    "revision": "d1da5617baf78a20d268dbc4fde23433"
  },
  {
    "url": "assets/js/111.4635afeb.js",
    "revision": "741182f24680120598802541f74dc465"
  },
  {
    "url": "assets/js/112.5d7dc28d.js",
    "revision": "92e01ecfe8d4d32fb35a04d64e0653fd"
  },
  {
    "url": "assets/js/113.b532b932.js",
    "revision": "79861c53d9bbe1a2446a7f41e3b09a76"
  },
  {
    "url": "assets/js/12.06b7f82e.js",
    "revision": "37b842344398ae87239bff715c4a2841"
  },
  {
    "url": "assets/js/13.c1648fd0.js",
    "revision": "ea82f531cd13652e2b68d2c2b2f5a25d"
  },
  {
    "url": "assets/js/14.2623a5b9.js",
    "revision": "2fd7524302f58f444760c339253c7f52"
  },
  {
    "url": "assets/js/15.432ee289.js",
    "revision": "e7a4914c5923a90c4b67b15a30a9554b"
  },
  {
    "url": "assets/js/16.717e0fef.js",
    "revision": "fb15db83859eb73415604616763b93b3"
  },
  {
    "url": "assets/js/17.20049db7.js",
    "revision": "bc7fa1328dbfa58467ada11714349f0f"
  },
  {
    "url": "assets/js/18.7e08b011.js",
    "revision": "99589a5c38d3635503f85d43fda886b9"
  },
  {
    "url": "assets/js/19.5289ae5e.js",
    "revision": "22e421b1247799da312e75b48d062b03"
  },
  {
    "url": "assets/js/2.40a5c958.js",
    "revision": "c647eb780ef500408d1dd638a482f557"
  },
  {
    "url": "assets/js/20.d679fe4f.js",
    "revision": "29ebfd107e07ab26e997853e4e8edc8b"
  },
  {
    "url": "assets/js/21.b353215b.js",
    "revision": "9e4214f3f339dd12fb8c03113f4752da"
  },
  {
    "url": "assets/js/22.f79e0154.js",
    "revision": "54e0006464ebb708108328624de7cf50"
  },
  {
    "url": "assets/js/23.168e40a8.js",
    "revision": "ee4d9c930bdee4c0887fe642385c347c"
  },
  {
    "url": "assets/js/24.c26ae569.js",
    "revision": "1cc1de46731c2390e6b4d5560cd894eb"
  },
  {
    "url": "assets/js/25.8ce64af6.js",
    "revision": "5c1cf5bb21c1efd10345731ce3ba32e6"
  },
  {
    "url": "assets/js/26.fe17db53.js",
    "revision": "901bc48741589a04f690ed63c1f7c93b"
  },
  {
    "url": "assets/js/27.0fa9841b.js",
    "revision": "35e7a5af6c232ef71d1841f504de407c"
  },
  {
    "url": "assets/js/28.22d35027.js",
    "revision": "1f67183925b4f48e59735c411f020e4f"
  },
  {
    "url": "assets/js/29.2ecf0bf8.js",
    "revision": "ade906b02bb633a1f724923fdc2f8bca"
  },
  {
    "url": "assets/js/30.7174a2e4.js",
    "revision": "550e430b39784a567053017c25820de9"
  },
  {
    "url": "assets/js/31.a4c3d911.js",
    "revision": "e78da9176bd64253fbb47d91ad18d74d"
  },
  {
    "url": "assets/js/32.538de7a8.js",
    "revision": "93bd86291ebb46fe8dce16431aa229e2"
  },
  {
    "url": "assets/js/33.215fbfb9.js",
    "revision": "ba9a64a60414517c01efe12c2593a585"
  },
  {
    "url": "assets/js/34.220b112b.js",
    "revision": "47527ad69f2ea3e0a0f156230e2cf122"
  },
  {
    "url": "assets/js/35.7c97aab8.js",
    "revision": "bafd433cabbcdb92129a80c22b666723"
  },
  {
    "url": "assets/js/36.c88d2a10.js",
    "revision": "a7262b219e6931172a204f9c8b12f954"
  },
  {
    "url": "assets/js/37.488e1869.js",
    "revision": "b37a80130feeab88b5981f1edc166ecd"
  },
  {
    "url": "assets/js/38.e01be72f.js",
    "revision": "76c0859d9613dc4022392c52a3bf946d"
  },
  {
    "url": "assets/js/39.093ffcb0.js",
    "revision": "f2100ca76a584dd7750b3af6f9e81df8"
  },
  {
    "url": "assets/js/40.f0f70805.js",
    "revision": "973ffa59eb9d1b85c4585b998744ef9d"
  },
  {
    "url": "assets/js/41.f5eb248a.js",
    "revision": "c7347d7d2e7a6ffaf64279879022a9ca"
  },
  {
    "url": "assets/js/42.1075f0f3.js",
    "revision": "9489fca0cd65ac9a67d1733b07b8a151"
  },
  {
    "url": "assets/js/43.04d0ca35.js",
    "revision": "74b1181eafbe1b6701df0e8338afaeac"
  },
  {
    "url": "assets/js/44.7b799298.js",
    "revision": "fda0cc8955d1538ad1c7cb258e28f702"
  },
  {
    "url": "assets/js/45.be971e8a.js",
    "revision": "6ebd1f0ab288154abaacf7dd2ab1e9a7"
  },
  {
    "url": "assets/js/46.94215ab5.js",
    "revision": "30b27912cbc235562ebfc5cd8f5f2c26"
  },
  {
    "url": "assets/js/47.bb2ef224.js",
    "revision": "f47b5532aecdd2c6903f687b100c9237"
  },
  {
    "url": "assets/js/48.dc71d941.js",
    "revision": "0d6e50cae490d0748174e07487e88da6"
  },
  {
    "url": "assets/js/49.3a782714.js",
    "revision": "e818f165db0eb972bb5c92504184e046"
  },
  {
    "url": "assets/js/50.c029c1af.js",
    "revision": "fb38ad5ffc899b713c9cc61d5e3de2c7"
  },
  {
    "url": "assets/js/51.261710ea.js",
    "revision": "8c8e1db9707b773026672e878f6718f9"
  },
  {
    "url": "assets/js/52.d2bc15ac.js",
    "revision": "ac4517ac96357b06c2d9fb953c6901bb"
  },
  {
    "url": "assets/js/53.8d548316.js",
    "revision": "12851db7159e16580a23d08d9edbace4"
  },
  {
    "url": "assets/js/54.356c22ac.js",
    "revision": "11730ea570ec6337ab0c17103c991ba2"
  },
  {
    "url": "assets/js/55.c0b3bd10.js",
    "revision": "9703ae57a80399f8a9c7deae4aa51497"
  },
  {
    "url": "assets/js/56.73713933.js",
    "revision": "d1783896e623466e4c00ad382ad5825f"
  },
  {
    "url": "assets/js/57.4aab1c10.js",
    "revision": "af8fa04b4abc39f221794597422082d9"
  },
  {
    "url": "assets/js/58.3ca81d33.js",
    "revision": "df7d9576b24dde5fb1eb188289b1221c"
  },
  {
    "url": "assets/js/59.b46452ac.js",
    "revision": "bdfacd67f468b477c3e51bfd7f6143da"
  },
  {
    "url": "assets/js/6.87507ebf.js",
    "revision": "5b9f0373dccd26961be1aeb1e96004bb"
  },
  {
    "url": "assets/js/60.c955d826.js",
    "revision": "d873f2871ce424ec7eb7227fcb4152df"
  },
  {
    "url": "assets/js/61.a3224341.js",
    "revision": "9f5e67982acc879a8c818741f2850de9"
  },
  {
    "url": "assets/js/62.7ad51287.js",
    "revision": "1e17d36ebbd3006b2b4fa4df0a9e61f6"
  },
  {
    "url": "assets/js/63.bc96804a.js",
    "revision": "d1f75a0993e8c730c0567de1e80080a8"
  },
  {
    "url": "assets/js/64.f8a05ceb.js",
    "revision": "425a2f3feb208a8ffaca5db73504a1cc"
  },
  {
    "url": "assets/js/65.12752a6d.js",
    "revision": "08e0a975a4f5b9b610bc24aa2d742dac"
  },
  {
    "url": "assets/js/66.89866c67.js",
    "revision": "dfe8951981e08772c645d8afb05e1b52"
  },
  {
    "url": "assets/js/67.34f78abc.js",
    "revision": "f0848ef371714d1a0d964d1032a91970"
  },
  {
    "url": "assets/js/68.0d40996c.js",
    "revision": "ac305574ce7c9862a1beb3f568be22a4"
  },
  {
    "url": "assets/js/69.52ce2bae.js",
    "revision": "2486d8c57c606ad5df426b0793378771"
  },
  {
    "url": "assets/js/7.d79948cc.js",
    "revision": "51b929fc8076f7e9ec09a5a2cd90840c"
  },
  {
    "url": "assets/js/70.31390ac0.js",
    "revision": "d3e435417d07874e7641fab2115b39e4"
  },
  {
    "url": "assets/js/71.51033202.js",
    "revision": "8a4cedb5a231e7a4498d000893879c23"
  },
  {
    "url": "assets/js/72.3a45b7cb.js",
    "revision": "1db92257f476f4b4d639585e2b15f187"
  },
  {
    "url": "assets/js/73.43be0440.js",
    "revision": "83728b7bdec2a03905fd1ff25948c3e6"
  },
  {
    "url": "assets/js/74.42eb1a8b.js",
    "revision": "9498e45d7a5031afb52003b9274f11f5"
  },
  {
    "url": "assets/js/75.8270aeee.js",
    "revision": "c22012cb8d5272c3f04d4f7d08caa0fc"
  },
  {
    "url": "assets/js/76.6ff48893.js",
    "revision": "5f3c42664c66eb801b516648a0ee94f9"
  },
  {
    "url": "assets/js/77.a3bbf352.js",
    "revision": "10faee2d757dd212db4c9394a77ac750"
  },
  {
    "url": "assets/js/78.3ed4db21.js",
    "revision": "0caa4be84fd748544839cef7ccccba85"
  },
  {
    "url": "assets/js/79.98b172b9.js",
    "revision": "306ab4badc84482c47a1aee143e77a57"
  },
  {
    "url": "assets/js/8.a54a47b8.js",
    "revision": "2270efa70fdf3d6c11e27efafdac5529"
  },
  {
    "url": "assets/js/80.1064a33a.js",
    "revision": "5808ac15d62c32b5579f1b57016ac3f3"
  },
  {
    "url": "assets/js/81.d6cb9143.js",
    "revision": "47390aa22a71dc01184d50375a79feb8"
  },
  {
    "url": "assets/js/82.701a18bf.js",
    "revision": "bb039c39bca1a400b913b5a62b688b68"
  },
  {
    "url": "assets/js/83.82200581.js",
    "revision": "0e2b365ed82d2eafadd143848073d9f9"
  },
  {
    "url": "assets/js/84.211e8ba9.js",
    "revision": "2c1cac03809829922d1f043736527be2"
  },
  {
    "url": "assets/js/85.4c04c75b.js",
    "revision": "f10aa2583a9c7e587d46e72a47173586"
  },
  {
    "url": "assets/js/86.a622200c.js",
    "revision": "dd7bf689e6318d05ad6103fe7444fa62"
  },
  {
    "url": "assets/js/87.29febfea.js",
    "revision": "24419a70b010d8677e522fe10b8befa1"
  },
  {
    "url": "assets/js/88.dbb2dc66.js",
    "revision": "94809914e60f002b57a4ba667ff054c3"
  },
  {
    "url": "assets/js/89.3d15ed45.js",
    "revision": "cc435e49117f8d8675dd9b60b75f0fd3"
  },
  {
    "url": "assets/js/9.91ac48fb.js",
    "revision": "f86fa05967a6f0e2b5b529b9c579ec35"
  },
  {
    "url": "assets/js/90.fee82919.js",
    "revision": "430854355e635b4df3756b298fd3dc29"
  },
  {
    "url": "assets/js/91.4c51a972.js",
    "revision": "a7327023791268fda937b9f3048fbf6d"
  },
  {
    "url": "assets/js/92.f80b5326.js",
    "revision": "a3adeb61358248cc0ae1f5e3ed1fbdb8"
  },
  {
    "url": "assets/js/93.c6a9b69e.js",
    "revision": "2f8cc2ecf0b14a4b478f2d1db99fc551"
  },
  {
    "url": "assets/js/94.cf6dcde3.js",
    "revision": "ac7b926768eec535fc61e80bc9c018ba"
  },
  {
    "url": "assets/js/95.cf533ce5.js",
    "revision": "c5ce454abf98bc05bf0a4bbd6347fd6c"
  },
  {
    "url": "assets/js/96.2439fcd6.js",
    "revision": "acf7568613b1379866283850ba0a13ac"
  },
  {
    "url": "assets/js/97.0bc5375e.js",
    "revision": "2e2c41c79cdb7f077cb6257f6f269341"
  },
  {
    "url": "assets/js/98.26be2649.js",
    "revision": "a57892ef1a3078c5b9cb0e44ee658491"
  },
  {
    "url": "assets/js/99.e1f307eb.js",
    "revision": "47b7461e333eef4642e0e072261e5e71"
  },
  {
    "url": "assets/js/app.01d79a1f.js",
    "revision": "f56ccf18f5b80d08197c846ce13a3724"
  },
  {
    "url": "assets/js/vendors~docsearch.6aa5a3ed.js",
    "revision": "bdc33dc886de6a397bda8f203b650d00"
  },
  {
    "url": "assets/js/vendors~flowchart.5c2a134b.js",
    "revision": "8c7cf80295752088795c784691d3f28e"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "2892176e5087784dd783ca9c7b9d7e9f"
  },
  {
    "url": "categories/index.html",
    "revision": "fbec65ba03eed21c94d1a1ec95ae5f27"
  },
  {
    "url": "en/index.html",
    "revision": "74b92601e508622108ce78d52ac87bdc"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "7e03996355fd1a33378b91d37ff3dfcc"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "e9d07d76df6f691dbaaa76b9c9cd5cc2"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "069dab11782c55173dc7e062163be49a"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "81922a8725809bd11b88aa1c47d7d8c7"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "03f3ac25b378b6d82bc4566f5095ca4d"
  },
  {
    "url": "en/views/1.x/ga.html",
    "revision": "ccfd4da25dae6582ba6c07b35f2b7dce"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "d9f60099f5301b27dbc383ff6e4b0cde"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "62928f532daec3e3d0dbeab50adef8e5"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "9f39093e236a8b3482dc838c842d04ad"
  },
  {
    "url": "en/views/1.x/local.html",
    "revision": "c55cb4fefb17725e1df4d8012d7c7127"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "fc1c9bc186de3b9e9de8e3a831c9f880"
  },
  {
    "url": "en/views/1.x/notfound.html",
    "revision": "1571dc4b3817ce5a4e9ac184f016272c"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "756f19500eebe2fb61cb17675364f0fe"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "447309c808c8fc26d49ca0399229ab28"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "fe0116a18fc11671e54798e6c98a93c6"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "63e17f9176f9c6c375866f1b0b6698e2"
  },
  {
    "url": "en/views/1.x/themePicker.html",
    "revision": "19486f005f1d8bbb08f094a064e1eb6d"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "cfbbce9b6172ebe5c15c5ef0d82c90b6"
  },
  {
    "url": "en/views/1.x/updatetoone.html",
    "revision": "9b8c2eebfe0033b942c81e35c34e1dac"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "a5639ece8cef3b37e0e2098e3c048711"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "61da5ada883c298a31fd4fbb7e6bc165"
  },
  {
    "url": "en/views/other/notice.html",
    "revision": "9926bbf6bf5a9a63cb62278ecc250c7c"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "20ba95404d3a0034e135748647e2cd3a"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "d64cb1aab8372bbc2cf9a6e21f22ab6d"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "03dc35b488d55c085e41bd8f7eb5520d"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "fa0b7afe6f263da9e20ac7a1ac300cd0"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "9001c472bd15c48db118348b3084be88"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "0fcd971dd7bc45c2f5fe99eb93292980"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "9f4fb946eb7dd1172d09538dfa478b65"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "520c2d23afe584f88d8c31d3370204c9"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "b0208ebf0518e6a4f3165311eec7ee5d"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "018dbeec1c6f8ed736f21b462e0bd165"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "1841c35f764758f35ebf924452e7cbe8"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "7bce3ad4502b9253899d30654ff3f4cb"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "de3eb739fd68244ade3c1da7b795bccb"
  },
  {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon_vuepress_reco.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "3e0bab97d9abfe46df5c575d68bf0ba0"
  },
  {
    "url": "tag/index.html",
    "revision": "afb58ad1dc3768c5e495ffa1613eaeab"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "cae4a9756f88e8ee9f2b8b00b0cab25a"
  },
  {
    "url": "tags/Secret Key/index.html",
    "revision": "79f2e949609017a430cdb1a6884a0dbb"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "80da2c56ebbad7044a83eacc912e8cc4"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "78007df9585956af6c4a239c76836707"
  },
  {
    "url": "timeline/index.html",
    "revision": "e640298b7418c3df4e97f929201c3daa"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "b25d83e60880e3cebab80770d44e2f8b"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "b1e86a9e5b63310659a83d65bf338872"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "596abeb5a4536e964f1f0c2433b9f9a2"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "b71307dfba370604f60f60cd0efe13b3"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "7558e07361f8804a14987c9d0c8cebf7"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "b1d43a11491a2c3f31a601b237084bc6"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "d44a8f260696465275f745f49388e582"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "b0f3e887e7d4262d1932a3dd18a66c63"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "be20cb63ae606b98c5f08577da53eca7"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "78590179df0b51114506888db41303cf"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "244d9a81beaa6a459fd1ab0e22149670"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "6e9dc95f2b3423025aca96a2d1d68fec"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "df9622bbfaa92237000ffacaac92693f"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "37529f8a4eba9f1d1671b5409edee94b"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "fa582c69ce3fb3fbbea0f93b500d6f95"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "a8be40ed9567565baca4b1483fdadf24"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "b443e716175608deeedaa406de2337b3"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "c5ba03cd45cfe37322ebc13fda8c6181"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "81e209a8355c6c60f1b279b535a4884b"
  },
  {
    "url": "views/1.x/local.html",
    "revision": "43abc08465218a3e5825164224ec80f8"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "9153f0d61cda9a549200500d605dd145"
  },
  {
    "url": "views/1.x/notfound.html",
    "revision": "a86bb3b600a6ca86ee0962616ffb6422"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "8396b0c37cd036112a0bc7f178f1d6f5"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "e348448c32728788b2c50e7b49e6f773"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "c952c914cb4d6bce78ba6651acb15439"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "03da59ce15fab8c346e5269797414d7b"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "c9b09c1b2ee6629285c71d2fd72eaea8"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "18ec0cfa31fb8656f5759ea093130e8f"
  },
  {
    "url": "views/1.x/updatetoone.html",
    "revision": "bf507dd63051055aa9e606d76bf4a394"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "e02d17375766f1cbf1f7af6c4c5526ad"
  },
  {
    "url": "views/other/about.html",
    "revision": "26b55c858b861792054dbad51461d0e9"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "0c439f25faeacc716f976e8f6ddcfc41"
  },
  {
    "url": "views/other/develop.html",
    "revision": "66e9143b12e6540e829ed60e3f4d002e"
  },
  {
    "url": "views/other/domain.html",
    "revision": "ab8a08ad4ff472fa44c0d868e07bdda6"
  },
  {
    "url": "views/other/donate.html",
    "revision": "0e48abd5651fb3949ce5ac9093eb5581"
  },
  {
    "url": "views/other/github-actions-secret-key.html",
    "revision": "82108da276d9c1f048380596b76745e7"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "bb70d67d646700e233489c21c1d49727"
  },
  {
    "url": "views/other/notice.html",
    "revision": "12f47a7e57784f898f6bd80449045fc9"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "dcc5c3cdcf01e29a88c3e06b1a044b2f"
  },
  {
    "url": "views/other/question.html",
    "revision": "8fca838088c2a7e05c8aa88190fc91c5"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "312f58cfe80d6b66401a8faed3de93e5"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "a736e8b0e353bf1e1eb78038cec9bb9c"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "153ca4d734c7a9d78e1c3b9f2953432c"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "7acd98ef73d66ce6df41576c0809dcc6"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "5b6fd9a74925da4fb183ac8da045837c"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "94e885b08174bff94029c170b6487505"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "9c46958296ab33ff671970ede26eb7c7"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "50a137de61910316e5c1f3b65173dd0b"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "abbc235e3456f0d31b4c67af98e9d912"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "fb9789d69b4d357958826ebcd7f498bf"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "53fc304e0508ff668c2f17ebf343eaab"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "d571d23d073aa4e471105eeeeb5062ba"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "9735719a7453712df3c4c0e665a5f147"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "68f43258bef92dad129bcfe6a86bac18"
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
