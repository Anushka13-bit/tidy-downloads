# anushka-tidy-folders

[![npm version](https://img.shields.io/npm/v/anushka-tidy-folders.svg)](https://www.npmjs.com/package/anushka-tidy-folders)
[![license](https://img.shields.io/npm/l/anushka-tidy-folders.svg)](LICENSE)

Sorts the loose files sitting in your Downloads folder into subfolders by type — Images, PDFs, Documents, Archives, Installers, Audio, Video. No config needed.

## Usage

Run it directly with no install:

```bash
npx anushka-tidy-folders
```

Or install it globally — the command it adds is `tidy-downloads`:

```bash
npm install -g anushka-tidy-folders
tidy-downloads
```

Organizes `~/Downloads` by default. To organize a different folder, pass its path:

```bash
npx anushka-tidy-folders ./some-other-folder
```

## What it does

- Leaves subfolders alone — only sorts loose files
- Skips hidden files (like `.DS_Store`)
- Leaves files with no matching rule untouched
- Never overwrites a file that already exists at the destination
- Safe to run repeatedly — already-organized files are simply skipped

## File types it sorts

| Folder | Extensions |
|---|---|
| Images | `.png` `.jpg` `.jpeg` `.gif` `.svg` |
| PDFs | `.pdf` |
| Documents | `.doc` `.docx` `.txt` |
| Archives | `.zip` `.rar` `.tar` `.gz` |
| Installers | `.dmg` `.pkg` `.exe` |
| Audio | `.mp3` `.wav` |
| Video | `.mp4` `.mov` |

## Contributing

Issues and PRs welcome — the extension-to-folder mapping lives in `cli.js` and is easy to extend.

## License

MIT
