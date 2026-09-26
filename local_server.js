const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8',
    '.xml': 'application/xml',
    '.pdf': 'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    try {
        const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
        let pathname = decodeURIComponent(parsedUrl.pathname);

        if (pathname.endsWith('/')) {
            pathname += 'index.html';
        }

        let filePath = path.join(BASE_DIR, pathname);

        if (!filePath.startsWith(BASE_DIR)) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Forbidden');
            return;
        }

        fs.stat(filePath, (err, stats) => {
            if (err) {
                if (!path.extname(filePath)) {
                    const htmlPath = filePath + '.html';
                    if (fs.existsSync(htmlPath)) {
                        filePath = htmlPath;
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end('<h1>404 Not Found</h1>');
                        return;
                    }
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end('<h1>404 Not Found</h1>');
                    return;
                }
            } else if (stats.isDirectory()) {
                filePath = path.join(filePath, 'index.html');
            }

            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';

            fs.readFile(filePath, (readErr, content) => {
                if (readErr) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            });
        });
    } catch (e) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error: ' + e.message);
    }
});

server.listen(PORT, () => {
    console.log(`AIBARS Local Server is running at http://localhost:${PORT}`);
});

// [Build Step 2/102] - chore: establish initial project structure and repository directory tree
// [Build Step 3/102] - build: configure .gitignore for environment, artifacts, and node modules
// [Build Step 4/102] - build: define jsconfig.json and VS Code developer workspace settings
// [Build Step 5/102] - docs: define institutional academic mission and institutional scope in README
// [Build Step 6/102] - assets: import official Army IBA Sylhet institutional crest (aibalogo.jpg)
// [Build Step 7/102] - assets: configure vector insignia and seal SVG for institutional branding
// [Build Step 8/102] - assets: organize official faculty and research staff portrait directory
// [Build Step 9/102] - assets: add systems technical lead portrait asset for research operations
// [Build Step 10/102] - style(vars): initialize CSS custom properties and color variables
// [Build Step 11/102] - style(theme): establish primary institutional emerald (#1e5a3c) and military dark green palette
// [Build Step 12/102] - style(theme): add academic gold and warm amber accent tokens (#d4af37)
// [Build Step 13/102] - style(typography): configure Google Fonts with Playfair Display serif and Inter typography
// [Build Step 14/102] - style(reset): establish modern box-sizing, smooth scrolling, and touch target rules
// [Build Step 15/102] - style(layout): implement max-width container, responsive paddings, and utility wrappers
// [Build Step 16/102] - style(components): design institutional badge and status pill styling
// [Build Step 17/102] - style(buttons): create primary, secondary, and ghost CTA button styles
// [Build Step 18/102] - style(cards): add elevation shadows and card hover elevation transitions
// [Build Step 19/102] - data: define governance data architecture schema in js/governance.js
// [Build Step 20/102] - data: configure Tier 1 Chief Patron institutional metadata in js/governance.js