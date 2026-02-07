import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Rutas estáticas que se pueden pre-renderizar
  {
    path: 'portfolio',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'safirial-icons',
    renderMode: RenderMode.Prerender
  },
  // Las rutas dinámicas de Catarina usan SSR en tiempo de ejecución
  {
    path: 'catarina',
    renderMode: RenderMode.Server
  },
  {
    path: 'catarina/**',
    renderMode: RenderMode.Server
  },
  // Ruta catch-all (debe coincidir con app.routes.ts)
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
