import { join } from 'path';

// Construye la ruta al servidor de Angular
const serverPath = join(process.cwd(), 'dist/Portfolio/server/server.mjs');

// Carga el handler de forma asíncrona
let reqHandler = null;

export default async (req, res) => {
  if (!reqHandler) {
    const serverModule = await import(serverPath);
    reqHandler = serverModule.reqHandler;
  }
  return reqHandler(req, res);
};