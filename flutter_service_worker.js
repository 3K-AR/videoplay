'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "321753551031e0ba5d03b46dd9c7dd0e",
"assets/assets/1.png": "aced16bb45c10450cadaaecac89d68b1",
"assets/assets/HigherLove.mp4": "a7cf4e2179c16460196cf49e180e4478",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "12a70f8e92f7c0c5438a4eea7fae847a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "18dbf4a9c2b03b725ed1ce057561bbe0",
"/": "18dbf4a9c2b03b725ed1ce057561bbe0",
"main.dart.js": "bebaf176837656af2c580ec95c1709e3",
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
