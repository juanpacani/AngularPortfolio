import { join } from 'path';

// Construir la ruta al servidor de Angular
const serverPath = join(process.cwd(), 'dist/Portfolio/server/server.mjs');

// Cargar el handler de forma asíncrona
let reqHandler = null;

export default async (req, res) => {
  if (!reqHandler) {
    const serverModule = await import(serverPath);
    reqHandler = serverModule.reqHandler;
  }
  return reqHandler(req, res);
};
