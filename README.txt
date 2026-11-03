Teaching Journal Pro V5.1 — verification fixes

IMPORTANT: Export a JSON backup from the current app before replacing repository files.

GitHub Pages deployment:
1. Extract this ZIP.
2. Replace the files in the repository root with these package files.
3. Commit and push the changes.
4. Wait for GitHub Pages to deploy, then hard-refresh the app (Ctrl+F5 on desktop).
5. If the old UI remains, close/reopen the PWA or clear the site's cached data only after exporting a backup.

Data compatibility:
- Keeps the existing localStorage key: teachingJournalPro_v1.
- Session and timetable data remain in the same JSON structure.
- Absence/holiday data is stored as additional top-level arrays (absences, holidays).
- Existing JSON backups remain importable; restore replaces the current data, so back up first.

Verification performed:
- ZIP integrity check.
- JavaScript syntax check for all inline scripts.
- Static checks for data persistence and report affected-session handling.

Note: This is a local-first browser app. Local records are not automatically shared between devices or browsers.
