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
// [Build Step 21/102] - data: configure Tier 2 Strategic Academic Advisor metadata in js/governance.js
// [Build Step 22/102] - data: configure Tier 3 Acting Head and Academic Coordinator data in js/governance.js
// [Build Step 23/102] - data: configure Tier 4 Research Assistant & Systems Technical Lead data in js/governance.js
// [Build Step 24/102] - data: export CommonJS and browser module bindings in js/governance.js
// [Build Step 25/102] - data: define scholarly publication registry schema in js/publications.js
// [Build Step 26/102] - data: register Jalalabad Papers (Vol. 4, Issue 1, 2026) in publications registry
// [Build Step 27/102] - data: register International Journal of Sustainability & Multidisciplinary Research (IJSMR)
// [Build Step 28/102] - data: register CRD Student Working Paper Series metadata in publications registry
// [Build Step 29/102] - data: catalogue bKash AI Nano Loans empirical study in publications dataset
// [Build Step 30/102] - data: catalogue Solar Home Systems (SHS) rural livelihoods research in publications dataset
// [Build Step 31/102] - data: catalogue Mobile Financial Services consumer adoption study in publications dataset
// [Build Step 32/102] - data: catalogue Green Finance and Climate Risk conference research in publications dataset
// [Build Step 33/102] - data: catalogue Graduate Employability and Industrial Skill Gaps working paper
// [Build Step 34/102] - data: configure publication filtering tags, DOIs, and citation schemas
// [Build Step 35/102] - script: create interactive UI controller in js/main.js
// [Build Step 36/102] - script: implement Lucide icon dynamic vector rendering initialization
// [Build Step 37/102] - script: implement smooth scroll navigation with sticky header offset calculation
// [Build Step 38/102] - script: implement scrollspy active navigation state listener
// [Build Step 39/102] - script: implement multi-category publication filter tab controller
// [Build Step 40/102] - script: add interactive manuscript submission callout modal handler
// [Build Step 41/102] - seo: define OpenGraph protocol metadata and canonical link declarations
// [Build Step 42/102] - seo: add Twitter Card metadata for academic research sharing
// [Build Step 43/102] - seo: implement Schema.org ResearchOrganization and EducationalOrganization JSON-LD
// [Build Step 44/102] - seo: configure robots.txt crawling directives for institutional portal
// [Build Step 45/102] - seo: generate comprehensive sitemap.xml for search engine indexing
// [Build Step 46/102] - feat(header): construct institutional navigation bar with AIBA Sylhet crest
// [Build Step 47/102] - feat(header): implement institutional logo title and affiliation text hierarchy
// [Build Step 48/102] - feat(header): add responsive desktop and mobile navigation links
// [Build Step 49/102] - feat(header): add manuscript submission CTA trigger button in navbar
// [Build Step 50/102] - feat(hero): construct institutional hero header with statutory research badge
// [Build Step 51/102] - feat(hero): configure CRD institutional title and Playfair Display typography
// [Build Step 52/102] - feat(hero): add institutional motto: Pioneering Rigorous Scholarly Research
// [Build Step 53/102] - feat(hero): integrate primary Institutional Journals and Call for Papers CTAs
// [Build Step 54/102] - feat(hero): design statutory mandate highlight card with academic seal
// [Build Step 55/102] - feat(hero): design scholarly research vision card with compass insignia
// [Build Step 56/102] - feat(mandate): create statutory mandate and research framework section
// [Build Step 57/102] - feat(mandate): implement Pillar 1: Institutional Publishing (*Jalalabad Papers*)
// [Build Step 58/102] - feat(mandate): implement Pillar 2: Faculty-Student Research Synergy & Assistantships
// [Build Step 59/102] - feat(mandate): implement Pillar 3: Policy, Regional Economics & Empirical Analytics
// [Build Step 60/102] - feat(mandate): implement Pillar 4: Methodological Rigor, PLS-SEM & Research Ethics
// [Build Step 61/102] - feat(mandate): polish 4-pillar grid layout and responsive card hover states