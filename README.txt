Daily Teaching Journal — IndexedDB Storage Migration

IMPORTANT: Before publishing, export a Backup data JSON file from your existing application.

This version migrates the full journal from the old localStorage entry to IndexedDB.
The migration reads the legacy journal, writes it to IndexedDB, verifies the database copy,
and only then removes the large legacy localStorage journal/snapshot entries. Calendar record
metadata remains in a small localStorage entry for compatibility with existing UI helpers.

The first launch after deployment may display a brief storage migration message. Keep the page
open until it completes. Do not clear browser data/site storage during migration.

After publishing, verify:
1. Existing sessions and timetable versions are present.
2. Add one timetable slot, close/reopen the app, and confirm it remains.
3. Create a Backup data JSON and confirm Restore backup remains available.

The HTML preview file is copied directly from index.html.
