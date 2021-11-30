'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "024806f2fa97902441809b55769a3504",
".git/config": "e3b65399ee49ceea06b14f9b79e765e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "296ed153fe3c77917a37490c4f4073e0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a449f644e64dd8d7ab6b32704bddd2a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de2c1ab14fbf0594080615ec53c1a0c5",
".git/logs/refs/heads/main": "f4e9c514f4d9a45f2a14a64b31fe44f5",
".git/logs/refs/remotes/origin/main": "16cd101c07aaf8c98ef31356afda1bda",
".git/objects/03/e9a9a2b213f815900e69d0195b96657a3f2c66": "d903742264a966bcc224a000fd860779",
".git/objects/0a/314618960a8b9a136ed450f56a637817272f95": "61230dd8315c90f5653e8d457f615bd8",
".git/objects/0b/cd260f952533730cc3c04e002b42d06d2aad4b": "4c0c5439ccec35d6eda092afc98d684d",
".git/objects/0c/36a3324664e089b5a84579684d5e3497e4a825": "594e8f218f129d6f1d2eda2eb2da777b",
".git/objects/17/3d7cd1131d7233e06e26de06b0e7e3cc7e7da5": "82c4d5fc796b3dabcf01d0714ef8f357",
".git/objects/1a/5861242dd76fd7e0105bb67550ce95e2cbe653": "0cc143f764526a71e14bbd79bd3f79a3",
".git/objects/1d/eea6352461dc381c772e8ae537eec6e06d5367": "d2207d7127935e334532443321bb6ce2",
".git/objects/24/dfbd56305946d3c8e68d4e88d8c756527fa87b": "72d7ef88f31f510c14406197bb4354b2",
".git/objects/30/6b1a4f9111188deb567edb4bbf12671e8b930e": "daef50a10581ef0e1587a74a01fec27c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/a9b8d722c925d8ac87c9aeef4b6db066ad0d90": "08ea087e61d1ac172268884e10251451",
".git/objects/34/d498c0416850b8ede2367224756330a337b90a": "097da48aecf256e632f0c022c4d7c91c",
".git/objects/39/7379599c7a26a391ca01fd99399d571bd68dcb": "950da71cf0e1558e1468d2ef1bb9aa82",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6d67073fb2ca772e01f9ca070b967cd1191634": "cab17297903baec86cc640d50abd2e12",
".git/objects/46/8f4317d884820f7f934942b3428a938cd45142": "645440d8eab49155c24c8a767b1c8a92",
".git/objects/4f/fffd4d06cd03456004f0463a67d1e8916740bf": "7a281ecbebbe1001802a6f24e4f49ce7",
".git/objects/53/107d2c0b0dd83b238181128b273d74c1efb408": "4e6438c10af4cbcfde0796f7364c399f",
".git/objects/53/b75ba6a0e4a7a7d1103c123901f04cd59fb607": "0973ec5621864053be01fa8a7f8f988f",
".git/objects/67/f37171a20fa4d7869a38db5f3e84fbe57fec32": "4ef0a9779fee2a403e7fd670553eb453",
".git/objects/69/2c09366036148898f16bc20ecb9e2e6b9904fb": "8981afd756f4990cc5355fccd8971ab6",
".git/objects/69/71985dd4580fdf9b145fd77e4dc0c674df019e": "ff371845d2542dd019991b159c24c5a1",
".git/objects/6f/b0e18c58ef4a4b86b76eb890b247443c238218": "59ee1f8232d511a9d167602a325dc88a",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/78/51a96c20ab9ef612aefb3b6e902ba59e3a0da1": "4c5378ca74879b6428bc8c7168680d39",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/db90ecd6cbc0a0d58650715fdad491d6fea736": "49ea16fa46b686cf6d4fa3c47be717e1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/8bc32c5b7bb179f2ea0e173610d3a1d69d093d": "bab2aaf78bae4422827d84c9a4a99970",
".git/objects/9f/bb0a342c1ed61154bbf2c16b3bd4ac3e4eb263": "91fd627758a119d813f3a24d27116350",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/3a630595e9b4722b63eb3d0e9b53a04fc996f7": "63ce8b0a0e3bff7a1a0c336b618f305f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/242f9c76b172246d46749577399ed09967c5e9": "578559eb3396aee0a5f9d798e040c718",
".git/objects/bc/f4b99ec284943a9f1f35e541239d7cff97a39d": "41c90a301bcd5af66b0a549b66bf0b7e",
".git/objects/bf/27a6566c56825ada6099d8e2bf599ad579bc1d": "41d03f5cc6098a484c84f4ad9128280c",
".git/objects/c5/ffec76b915f1a78114143668ce9293a401f5f5": "1d81be3b7bd59e9d86d09113121fd263",
".git/objects/c6/0d8400a570dcfafd4692da7aab6a8b34ae5cd2": "0dd6c6da6be9d20d2e09eef49dd33656",
".git/objects/cd/f6a123eebce055fef290773bf98f9e04958ef6": "9ea09cd459147f314aa2b43218f7d5c4",
".git/objects/d3/b033c78a4242af4c3d3526a21e1af6131b952f": "9ceeeb8ab99fdb573be5337eab5c2bbe",
".git/objects/d4/3f4f3601c4ea7d15effd57f97603206abf4905": "1fa3bbde12c14b13b8cb5cc1fce0224d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e1d5edd95a82a8084ede9c9a6a56a2b86b7b98": "fa666896f9cb6c600ebdcb07325060b6",
".git/objects/dc/f2e0bbcc02f10d9c24d324a70a341750518551": "7b5848215d0371fddcbd398ac5674707",
".git/objects/dd/121dc3138176295ef5681493b9fe6eb605f792": "967167a0f716b69b882c6b9708b34b12",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/ab25a89a190a9c2ce6f4580b87e587505dcd1a": "f7a994bc695ac4f0fb2ff0dd9441503e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/09c0a384dcc522308410fcb23411dfa2575871": "0c38534f7790943d4982d7cac835c443",
".git/objects/f0/5bb39edd95ee2b5b35c0488e5c74177afc88f4": "88bb13e10f548a4c4e4c71cbdc662d64",
".git/objects/f5/98ab9dfdfe9ffe5b4676ee2938886897d75840": "8a3557ad37814adc1ba67e6380194b6a",
".git/objects/f9/d45d981e484a1017a2cd8b5c0172bc3d7e03e9": "f84fae798cfa5faf65f2f97a308d8c41",
".git/objects/fa/7288d2bef1f533633d3d0bd6058e4478eb518b": "5b4b218897a81fdab7f895c3a206d357",
".git/ORIG_HEAD": "376a7ccbb894a7fe29656a0c164e2501",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "fc4dd6f0911b30dc5ff7ebc3e2721d3a",
".git/refs/remotes/origin/main": "fc4dd6f0911b30dc5ff7ebc3e2721d3a",
"assets/AssetManifest.json": "0d1412b1736ea55b41f8f385496f4f8e",
"assets/assets/md.png": "b07dc8b0956ce4b72bf2605d05c45be3",
"assets/assets/moon-regular.svg": "6f1f85f3a1c1a07ace28f724b77de4c2",
"assets/assets/moon-solid.svg": "399b1420858b9b19d9046a66f05227a8",
"assets/assets/sun-regular.svg": "fbffcf4c0463919a493c67a071c8ec21",
"assets/assets/sun-solid.svg": "aa59b8a4563d9e4bab5397881af52dcd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6126846e0aeddc753af52215aa0ef948",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2250f6425fe05bf726ab379baa0eb965",
"/": "2250f6425fe05bf726ab379baa0eb965",
"main.dart.js": "f35b5be15934a58de925504a1d47e67c",
"manifest.json": "52fc0453b8855eb9dd5b8bde98ad1f4f",
"version.json": "16e9ce38334373940d58b8c1e46336d6"
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
