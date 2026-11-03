Teaching Journal Pro V5 — Interface + Session Save/Print Fix

Deployment:
1. Export a JSON backup from the current app first.
2. Extract this ZIP.
3. Upload/replace the included files in the root of the GitHub Pages repository.
4. Commit changes and allow GitHub Pages to deploy.
5. On the app, hard refresh or close/reopen the installed PWA to load the updated service worker.

This version keeps the existing localStorage key teachingJournalPro_v1 and existing session structure, while adding sessionType/room to saved session records. Existing records remain compatible.

Changes in this build:
- Dashboard styling adjusted toward the supplied navy/gold/green/grey reference.
- Session type and room are now included in saved records and restored when editing.
- Save & Print uses the same save handler and prints the exact saved session instead of relying on a timeout/after-reset lookup.
- Added a dedicated printSessions function for individual sessions and session cards.
- Updated service-worker cache name to prevent old app files from being served.

Verification: JavaScript syntax check and ZIP integrity check passed. This is not a full browser/device test; please test Save, Edit, Save & Print, and backup restore on a duplicate/test deployment before replacing your main live app.
