self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/profile') && 
      !event.request.url.startsWith(self.location.origin)) {
    event.respondWith(Response.redirect('/index.html'));
  }
});