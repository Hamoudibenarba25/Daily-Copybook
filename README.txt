TEACHING JOURNAL PRO — INSTALLABLE PACKAGE
For Dr. Hamoudi Benarba | Abane Ramdane Secondary School | 2026–2027

Included: index.html, manifest.json, sw.js, app icons.

AUTOMATIC LOCAL SNAPSHOTS
Each save/update/delete stores up to 10 recent snapshots locally in the same browser storage. If the main journal record cannot be read, the app attempts to recover the latest snapshot.
This is not cloud backup. Clearing site/browser data, losing the device, or storage failure can remove the snapshots too. Keep occasional exported JSON backups in a separate safe location.

INSTALL
Full installability and service-worker offline caching require HTTPS (or localhost). Opening index.html directly as a file can run the app, but installation/offline caching will not be enabled.
1. Upload all files in this folder to a static HTTPS host you trust.
2. Open the hosted index.html in Chrome.
3. Use Chrome menu > Install app or Add to Home screen (wording may vary).
4. Open once while online so the app shell is cached, then test offline.
5. Always use the same hosted address; browser data is tied to that site address.

MOVE EXISTING DATA
1. In your current app, select Backup data.
2. Open the new hosted app.
3. Select Restore backup and choose the downloaded JSON file.
