const CACHE_NAME='daily-teaching-journal-v5-5-4-timetable-refresh';
const APP_SHELL=['./','./index.html','./manifest.json','./icon-192.svg','./icon-512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  const isHTML=e.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('.html');
  if(isHTML){
    e.respondWith(fetch(e.request).then(r=>{
      if(r&&r.status===200&&url.origin===self.location.origin){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));}
      return r;
    }).catch(()=>caches.match(e.request).then(cached=>cached||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
    if(r&&r.status===200&&url.origin===self.location.origin){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));}
    return r;
  }).catch(()=>caches.match('./index.html'))));
});
