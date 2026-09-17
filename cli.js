#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Map of file extensions to the folder name they should land in.
// Add more extensions here anytime you notice a new file type piling up.
const rules = {
  '.png': 'Images',
  '.jpg': 'Images',
  '.jpeg': 'Images',
  '.gif': 'Images',
  '.svg': 'Images',
  '.pdf': 'PDFs',
  '.doc': 'Documents',
  '.docx': 'Documents',
  '.txt': 'Documents',
  '.zip': 'Archives',
  '.rar': 'Archives',
  '.tar': 'Archives',
  '.gz': 'Archives',
  '.dmg': 'Installers',
  '.pkg': 'Installers',
  '.exe': 'Installers',
  '.mp3': 'Audio',
  '.wav': 'Audio',
  '.mp4': 'Video',
  '.mov': 'Video',
};

// Which folder to organize. Defaults to ~/Downloads, but you can pass
// a different folder as the first argument: `tidy-downloads ./some-folder`
const targetDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(os.homedir(), 'Downloads');

function organize(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let movedCount = 0;

  for (const entry of entries) {
    // Skip subfolders — we only sort loose files, and skip dotfiles like .DS_Store
    if (entry.isDirectory() || entry.name.startsWith('.')) continue;

    const ext = path.extname(entry.name).toLowerCase();
    const destFolder = rules[ext];

    // No rule for this extension? Leave it alone.
    if (!destFolder) continue;

    const destDir = path.join(dir, destFolder);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir);
    }

    const oldPath = path.join(dir, entry.name);
    const newPath = path.join(destDir, entry.name);

    // Avoid overwriting a file that already exists at the destination
    if (fs.existsSync(newPath)) {
      console.log(`Skipped (already exists): ${entry.name}`);
      continue;
    }

    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${entry.name} -> ${destFolder}/`);
    movedCount++;
  }

  console.log(movedCount === 0 ? 'Nothing to organize.' : `Done. Moved ${movedCount} file(s).`);
}

organize(targetDir);
