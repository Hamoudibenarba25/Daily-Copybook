const CACHE_NAME='daily-teaching-journal-timetable-desktop-fix-v6-20261104';
const APP_SHELL=['./','./index.html','./manifest.json','./icon-192.svg','./icon-512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 if(url.origin!==self.location.origin)return;
 // Always check for the latest published HTML first, while retaining offline fallback.
 if(e.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('.html')){
  e.respondWith(fetch(e.request).then(r=>{
   if(r&&r.status===200){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));}
   return r;
  }).catch(()=>caches.match(e.request).then(c=>c||caches.match('./index.html'))));
  return;
 }
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
  if(r&&r.status===200){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));}
  return r;
 }).catch(()=>caches.match('./index.html'))));
});
