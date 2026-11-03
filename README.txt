Teaching Journal Pro V4 - GitHub Pages replacement files

Extract this ZIP. It contains the replacement index.html and sw.js plus the app manifest and icons.

To deploy:
1. Make a JSON backup of your current journal records in the app.
2. In the GitHub repository Daily-Copybook, upload these extracted files from the ZIP to the repository root.
3. Choose to replace existing files when prompted. Make sure index.html and sw.js are replaced.
4. Commit changes to main.
5. Open the GitHub Pages site in a regular Chrome tab and hard refresh (Ctrl+F5).
6. If the installed app still displays old files, open Chrome DevTools > Application > Service Workers and unregister the old service worker, then clear only the site's Cache Storage. Do not clear Local Storage or site data if you need existing journal entries.

Do not upload the ZIP itself; upload the extracted files.
