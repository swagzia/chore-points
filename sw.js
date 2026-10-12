// Minimal service worker: lets the app be installed; always uses the network for fresh data.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", () => {});
