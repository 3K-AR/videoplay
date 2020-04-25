'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "01a228da3b15654a0dd9447541c2ede2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "f7073a136baa261ae2d99609d0e751fd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dab1a83f04bf724d6ee3ab40ad8f3018",
".git/logs/refs/heads/master": "dab1a83f04bf724d6ee3ab40ad8f3018",
".git/logs/refs/remotes/origin/master": "b5f354b612914460af62bca224bafbd2",
".git/objects/03/b55e831ab02d866756c375a5489d8c940e3d1a": "5d187f4ad3ebac5e091904b40084c5f3",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/fbe0021720bcc0ef08c084b24dc2feefd64bc6": "1a211e02c986b98c57e42f476489c8b9",
".git/objects/2f/3cf6307b846d12f00d0ac4407f2f05e56c8711": "d1a3468fbced66c8b9df0eb8cdfbc5b4",
".git/objects/39/54bf4f70ef5256ad36a3241f8746ff37e2879e": "9a6228d381561c64873e1d344803d2e9",
".git/objects/3a/348a0ed62b7fd2a8ab345e57fd0ec28332d9dd": "999d5ff27243c42e22bb87348b3431e4",
".git/objects/40/0bd45618c6f595fd1b3bb1925924e4ba7008d8": "4f3a1d2e8532039927b871ad85ab35d5",
".git/objects/49/04c8eb03966ccacc38fb676244547fc89aacf5": "2ab2319e074bd1bc8aa0eb42d5dc07c8",
".git/objects/4d/99bcaf656b2f0b525b4141a3c274856011577f": "6c6a82f3ffa64ec228f041a9a6719fac",
".git/objects/5d/fa27ab8d10ae5380f9d68fcf4b345e9f795ff5": "4fa366617a2db3670b0d533071442b4b",
".git/objects/64/12fd2e44ca905a30ae75f92b6615d08938f568": "f5d0a5bf8aea18234db13642e5543891",
".git/objects/67/8906fdbf8993af47683c8300bba4b1bca5cf64": "a29cc21040142195de7ad9b22003c77d",
".git/objects/6c/f89b478b21abde64a5ba5b839032cc50f82858": "75e5628aa37c50ac9a226d7f457f384c",
".git/objects/75/62a28c23c0bbf132b33dfc8b6574db1146a4dc": "03263fdb72de7c6a23db25e45d3ea2a3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/f2a751f4cfc4edd9870be07c042628fa351a75": "f0ea8ad1e080737cd0dd7cdbca4e016e",
".git/objects/86/cdef0090d3e7e3eaf47e7fd1bfc5b8aa06099c": "167bfa44b9360482fe468afaae9cc1ec",
".git/objects/88/9ba77c5e2df2e11492b160fa9c957ea49b1b5f": "6f6c0bfac40f0b109d7a95291b50841d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/8fe71649e31e6bb5e8447a8229fa97b44462a6": "1800695cea1c297de20c8c77099820d3",
".git/objects/96/39d08406cdce49dc7a3b4b84ef0b6efac7d9a9": "9e7c504a95f349f33c9643f4571efc0b",
".git/objects/98/053f07fcdfd3a7fd4a01c6463e5326b6cf1d80": "191128913ee82535f1db7f90568451e3",
".git/objects/ae/62b1e310834e0ef0141a4bfa97df22604f64fb": "f5b489702755fca06201a37633870c87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/f5d6ffa343efd448294d917d690105b04b8d67": "68d409814da5836c7ae1e1beaa751c09",
".git/objects/c9/59d49c82edb56d88664c566f39bd63390e76e9": "260c4aeac0b2d57792d87780f215ce00",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e4/9bfaa9ab4dc3e550d868cc39dc20cb80dc6786": "916fd63d48fd66e8997e38f2a569f349",
".git/objects/f9/d253edda6ee9fca1a393fa73761b8a22a04086": "63c5f2d35cb845a9aa276801ae96ca87",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ff/fe58c72a33232e6a78dd6c5f8e67ed7068e07b": "bc51960040209cbc4890d70fe2729c97",
".git/refs/heads/master": "b4b35674346f9924f85d6fac73382b1e",
".git/refs/remotes/origin/master": "b4b35674346f9924f85d6fac73382b1e",
"assets/AssetManifest.json": "377c5deff75cc5a3458b685d18500e5c",
"assets/assets/1.png": "aced16bb45c10450cadaaecac89d68b1",
"assets/assets/HigherLove.mp4": "a7cf4e2179c16460196cf49e180e4478",
"assets/assets/HigherLove_1.mp4": "59cbfc170075caa19fd6394097e2288f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "e82deb7c491be67f7a5bbc1b95275367",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "18dbf4a9c2b03b725ed1ce057561bbe0",
"/": "18dbf4a9c2b03b725ed1ce057561bbe0",
"main.dart.js": "464379196dc6000bf160e825b647db61",
"manifest.json": "c08a7dbab1e8582f0d0b74c9e8ffb5c2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
