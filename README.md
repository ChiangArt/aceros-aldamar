# Aceros Aldamar — Website Oficial

Sitio web corporativo de **Aceros Aldamar**, empresa líder en la comercialización y distribución de productos siderúrgicos de alta calidad para los sectores de construcción, minería e industria en el Perú.

![Aceros Aldamar Preview](https://acerosaldamar.com/og-image.jpg)

## ✨ Características Principales

- **Diseño Premium**: Interfaz moderna con estética *glassmorphism*, animaciones fluidas y una experiencia de usuario de alto nivel.
- **Optimización de Rendimiento**:
  - Hidratación ultrarrápida (~10ms).
  - Gestión global de eventos de scroll mediante patrón singleton.
  - Uso de variables CSS para interacciones de mouse (cero re-renders innecesarios).
- **SEO & Sitelinks**:
  - Metadatos optimizados para todas las rutas.
  - Implementación de JSON-LD (Organization y WebSite) para mejores resultados en Google.
  - Sitemap y Robots.txt autogenerados.
- **Catálogo Dinámico**: Listado de productos estructurado por categorías con especificaciones técnicas detalladas y tablas de dimensiones.
- **Contacto Interactivo**: Botón de WhatsApp con burbuja de chat automática y tooltip inteligente.

## 🛠️ Tecnologías

- **Framework**: [React Router v7](https://reactrouter.com/) (Remix evolution).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/).
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/).
- **Bundler**: [Vite](https://vitejs.dev/).
- **Iconografía**: Lucide React / Custom SVGs.

## 📁 Estructura del Proyecto

```text
app/
├── components/          # Componentes globales (Layout, UI, Icons)
├── features/            # Lógica y componentes organizados por dominio
│   ├── home/           # Landing page y Hero
│   ├── about/          # Historia, Misión y Visión
│   ├── products/       # Catálogo y detalles de producto
│   ├── contact/        # Formularios y mapas
│   └── shared/         # Hooks y utilidades compartidas
├── lib/                # Datos estáticos y lógica de negocio (Catalog)
├── routes/             # Definición de rutas y entry points
├── app.css             # Estilos globales y tokens de diseño
└── root.tsx            # Layout raíz y configuración de providers
```

## 🚀 Inicio Rápido

### Requisitos

- Node.js (versión 20 o superior)
- npm o pnpm

### Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```

### Desarrollo

Inicia el servidor de desarrollo con HMR:
```bash
npm run dev
```

### Producción

Construye la aplicación para producción:
```bash
npm run build
```

Ejecuta el servidor de producción:
```bash
npm run start
```

## 📄 Licencia

Este proyecto es propiedad de **Aceros Aldamar**. Todos los derechos reservados.

---
Sitio desarrollado con ❤️ para impulsar la industria siderúrgica peruana.
