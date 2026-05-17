import fs from 'fs';
import path from 'path';

// This is a rough way to extract IDs since I can't easily import the ts file here without setup
const catalogPath = 'c:/frontend/web_projects/aceros-aldamar/app/lib/catalog.ts';
const content = fs.readFileSync(catalogPath, 'utf-8');
const ids = [];
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
    if (!ids.includes(match[1]) && !['construccion', 'tubos-con-costura', 'perfiles', 'ejes', 'planchas-lac', 'planchas-especiales', 'bobinas-y-planchas', 'tubos-sin-costura'].includes(match[1])) {
        ids.push(match[1]);
    }
}

console.log('Found IDs:', ids.length);
const urls = ids.map(id => `  <url>\n    <loc>https://acerosaldamar.com/producto/${id}</loc>\n    <priority>0.7</priority>\n  </url>`).join('\n');
console.log(urls);
