import fs from 'fs';

function slug(input) {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const categories = [
  "construccion",
  "ejes",
  "perfiles",
  "tubos-con-costura",
  "tubos-sin-costura",
  "planchas-lac",
  "planchas-especiales",
  "bobinas-y-planchas"
];

const products = [
  { category: "construccion", name: "Barras de construcción BINORMA" },
  { category: "construccion", name: "Alambrón para Trefilería - SAE 1006" },
  { category: "construccion", name: "Alambre Negro Recocido" },
  { category: "construccion", name: "Calaminas natural" },
  { category: "construccion", name: "Calaminas prepintadas" },
  { category: "construccion", name: "Coberturas Aluzinc" },
  { category: "construccion", name: "Clavos para albañileria" },
  { category: "construccion", name: "Clavos para calamina" },
  { category: "ejes", name: "Barras redondas calibradas 1018 / 1045" },
  { category: "ejes", name: "Barras redondas lisas 1018 / 1020" },
  { category: "ejes", name: "Barras redondas lisas 1045" },
  { category: "ejes", name: "AISI 4140 LAC / AISI 4140 BONIFICADO (QT)" },
  { category: "ejes", name: "Barras perforadas SAE 1020" },
  { category: "perfiles", name: "Barras redondas lisas A36" },
  { category: "perfiles", name: "Barras cuadradas lisas A36" },
  { category: "perfiles", name: "Ángulos LAC A36" },
  { category: "perfiles", name: "ASTM A36 / A572 GR 50 (Dual)" },
  { category: "perfiles", name: "Platinas LAC A36" },
  { category: "perfiles", name: "Tee LAC A36" },
  { category: "perfiles", name: "Rieles" },
  { category: "perfiles", name: "Canal U" },
  { category: "perfiles", name: "Vigas H" },
  { category: "tubos-con-costura", name: "Tubos redondos negros LAC" },
  { category: "tubos-con-costura", name: "Tubos cuadrados negros LAC" },
  { category: "tubos-con-costura", name: "Tubos rectangulares negros LAC" },
  { category: "tubos-con-costura", name: "Tubos redondos galvanizados" },
  { category: "tubos-con-costura", name: "Tubos cuadrados galvanizados" },
  { category: "tubos-con-costura", name: "Tubos laminados en frío (A513)" },
  { category: "tubos-sin-costura", name: "Tubos Schedule (SCH 40/80/160)" },
  { category: "tubos-sin-costura", name: "Tubos para calderas A192" },
  { category: "planchas-lac", name: "Planchas LAC A36" },
  { category: "planchas-lac", name: "Plancha estriada (Lágrima)" },
  { category: "planchas-especiales", name: "Planchas para calderas y tanques" },
  { category: "planchas-especiales", name: "Planchas antiabrasivas Mirohard" },
  { category: "planchas-especiales", name: "Planchas expandidas" },
  { category: "bobinas-y-planchas", name: "Laminadas en frío (LAF)" },
  { category: "bobinas-y-planchas", name: "Planchas y bobinas galvanizadas" },
  { category: "bobinas-y-planchas", name: "Bobinas de Aluzinc (AZ 55%)" },
];

const baseUrl = "https://acerosaldamar.com";
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>${baseUrl}/nosotros</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/productos</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/contacto</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>

  <!-- Categories -->
${categories.map(cat => `  <url>
    <loc>${baseUrl}/productos/${cat}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>`).join('\n')}

  <!-- Products -->
${products.map(p => {
  const id = slug(`${p.category}-${p.name}`);
  return `  <url>
    <loc>${baseUrl}/producto/${id}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>`;
}).join('\n')}
</urlset>
`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully in ./public/sitemap.xml');
