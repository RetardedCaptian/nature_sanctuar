'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "77539230e13a5bddfcf67b4c91657bb8",
"assets/AssetManifest.bin.json": "f4b5a2c0cce6cf13035c33fc82c38181",
"assets/AssetManifest.json": "f1df63a497f8aadb58e0409dbb6fb0d4",
"assets/assets/coming%2520soon.json": "78eb30dc2f61af443b601b34180543d3",
"assets/assets/comingsoon.json": "6fad19057776fa8876975415bdc09104",
"assets/assets/icons/facebook.png": "ceda85dc6354796fd08c69a2032d2b29",
"assets/assets/icons/fb.png": "dc359b815cda385f4fd469318d0254d4",
"assets/assets/icons/fmob.png": "c9e61bf9a498808490b404dd2f7673e7",
"assets/assets/icons/in.png": "aa3a49fd907cb2ee9fc4484586ba064d",
"assets/assets/icons/ins.png": "d3c6fb6e0e952b89b2108a0e8e78bf1b",
"assets/assets/icons/instagram.png": "875597c968ee64e7cf5afbdec5f95278",
"assets/assets/icons/phone.png": "103eab72ca6b1757413486df16398132",
"assets/assets/icons/wapp.png": "1b8c0898b1e22b91285796c499a79d17",
"assets/assets/icons/whatsapp.png": "146ff100aa70a698a5a1f0c93796c1d7",
"assets/assets/icons/wp.png": "2ae56a547277e17698828c7202ae841a",
"assets/assets/images/activities/activities-main.jpeg": "733629c4097a6da671612bdb00c2b1ad",
"assets/assets/images/activities/jeep.jpg": "9c5156e264f628b9f6d277466f436548",
"assets/assets/images/activities/wf.png": "36b7cd65ce6ecb134481d8cbc0bc4187",
"assets/assets/images/contact/location.jpg": "305d8b650bf073eeff105c9ee6c55cd2",
"assets/assets/images/contact/mountain.jpg": "c69e26bb0c4d79c668420248c3de0225",
"assets/assets/images/gallery/gallery-main.jpeg": "f7a0f10d28a093d73f680c2a70dad0b5",
"assets/assets/images/home_images/clock.jpg": "d993d6b59b846f314addcced7be63116",
"assets/assets/images/home_images/home_main-50.jpeg": "b82842792eb58b8bec9da9619e1f9da0",
"assets/assets/images/home_images/home_main-80.jpeg": "7c6544b53575e92a862d6f952a492444",
"assets/assets/images/home_images/home_main_mob.jpeg": "f5c7ac30e5fbda3c7b195dcc4a13e5dd",
"assets/assets/images/home_images/home_sub.jpeg": "c9bc4b12c9915e233617535fe717b7fc",
"assets/assets/images/home_images/padam.jpg": "0550629587122894eae4c53b74a80a3f",
"assets/assets/images/home_images/thumnail.jpg": "cc1a8c019b2d73aa4a52b88b341e4a34",
"assets/assets/images/living/3%2520chair.jpg": "82e720064607c0599af0875fed178b5f",
"assets/assets/images/living/appom.jpeg": "85f224fd7fae0abdbc8872af2fa32322",
"assets/assets/images/living/couch.jpeg": "9ea2dcdd542314e4a600554b2d611834",
"assets/assets/images/living/living-bed.jpeg": "7ca43d9994725dda5361fc9d55bcb2ba",
"assets/assets/images/living/living_main.jpg": "1a8612a0877f0980b1c5b455876262f2",
"assets/assets/location.jpg": "305d8b650bf073eeff105c9ee6c55cd2",
"assets/assets/logo-small.png": "948367d8bc84c1ebdc050df0a4abfdcd",
"assets/assets/logo.jpg": "70bac836cc923f3fa58b042f894bcff0",
"assets/assets/logoo.jpg": "b33e9370d187a1955bed32d045b36bfa",
"assets/assets/new-logo.png": "c34bf8213962f5e8289e0cc36713099c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "8c64800313456c771d50ac71138bf101",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "113314417589345fcd926fb302b1741d",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "5a85902b18b29a18099278efe123f144",
"icons/Icon-512.png": "6c528d7f439825b92894af7a9bbdf046",
"icons/Icon-maskable-192.png": "5a85902b18b29a18099278efe123f144",
"icons/Icon-maskable-512.png": "6c528d7f439825b92894af7a9bbdf046",
"index.html": "64724d72d14aac4a5d38529af09cf54a",
"/": "64724d72d14aac4a5d38529af09cf54a",
"main.dart.js": "1c7cf7581515d01fbb65ab7f8684af20",
"manifest.json": "759729b64bfafb433005707b0a1bc803",
"version.json": "ce02cc7fe8be272bcf3a968ae6256423"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
