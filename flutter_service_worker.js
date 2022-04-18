'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "af3e5ef73f2ccc77b51f142f93533eba",
"assets/assets/AssetManifest.json": "c39ce65838e0b47108d258da4b382b6e",
"assets/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/assets/images/pic1.jpeg": "f7e0c7d62056cc3137bc0cc17f6bc57c",
"assets/assets/images/pic1.jpg": "c41b99cea859c9c70dc278a891fb52f6",
"assets/assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/assets/images/pic105.png": "32cd0afb610a5cf99fb6052819f00cff",
"assets/assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/assets/images/pic114.png": "5856e7ff3ce5506ff089d993097fd2a4",
"assets/assets/images/pic115.png": "6676dc2d592bb3d263759d8e7604d724",
"assets/assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/assets/images/pic117.png": "42c66f8ae91bb136643ffb59eee6ddea",
"assets/assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/assets/images/pic120.png": "3800847b0bf9c04ca789e9a0a1b7490b",
"assets/assets/images/pic121.png": "a27f63edb0f3cb9544acce2d7108758c",
"assets/assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/assets/images/pic3.png": "a87595fbdf6b4699309e81a76127309f",
"assets/assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/assets/images/pic501.png": "e01db473ff9fe3f0192758f385c3ed6a",
"assets/assets/images/pic506.png": "51947d83378b193aa5e84855879b753d",
"assets/assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/assets/NOTICES": "194789d5482b39f779dce5b6780bddc1",
"assets/FontManifest.json": "966a866ae19991bd6c6685f0e338af18",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "50825829baecbbf84f16f68890c01520",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/dev_icons/fonts/devicon.ttf": "eb29517242b5a2d2845d59b46359848e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f4f390dc4e6d331de43c577f2f3517e3",
"/": "f4f390dc4e6d331de43c577f2f3517e3",
"main.dart.js": "b59ca7cd6274cc1499f5018358ecf0e0",
"manifest.json": "3eb40801dcd177c1ffbe6df5cfb7c419",
"version.json": "c776ebc03e4b846a86648f6233675005"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
