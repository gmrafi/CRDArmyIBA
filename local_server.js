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