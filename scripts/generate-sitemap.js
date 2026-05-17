import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://acerosaldamar.com";

const catalogPath = path.resolve(__dirname, '../app/lib/catalog.ts');
const content = fs.readFileSync(catalogPath, 'utf-8');

// Regex to match category items (from catalogCategories)
// We look for objects with id: "something" inside catalogCategories array
// A simpler way: we know the exact categories.
const categories = [
  'construccion',
  'tubos-con-costura',
  'perfiles',
  'ejes',
  'planchas-lac',
  'planchas-especiales',
  'bobinas-y-planchas',
  'tubos-sin-costura'
];

// Regex to find all `id: "some-id"`
const idRegex = /id:\s*['"]([^'"]+)['"]/g;
const ids = new Set();
let match;

while ((match = idRegex.exec(content)) !== null) {
  ids.add(match[1]);
}

// Separate products from categories
const products = [...ids].filter(id => !categories.includes(id));

const staticRoutes = ["", "/nosotros", "/contacto", "/productos"];
const categoryRoutes = categories.map(c => `/productos/${c}`);
const productRoutes = products.map(p => `/producto/${p}`);

const allRoutes = [...staticRoutes, ...categoryRoutes, ...productRoutes];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <priority>${route === "" ? "1.0" : route.startsWith("/producto/") ? "0.7" : "0.8"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const outPath = path.resolve(__dirname, '../build/client/sitemap.xml');
fs.writeFileSync(outPath, sitemapContent, 'utf8');
console.log(`✅ Sitemap generated with ${allRoutes.length} URLs at ${outPath}`);
