# Safirial Icons – Paquete de iconos SVG para Angular

**Safirial Icons** es un paquete de iconos SVG pensado para aplicaciones Angular.  
Proporciona una lista de nombres de icono y una función para resolver rutas estáticas a los SVG.

Este paquete puede utilizarse de forma independiente o junto con los design systems `catarina` y `safirial`.

- **Paquete npm**: `safirial-icons`
- **Versión**: `0.1.0`

---

## Instalación

En un proyecto Angular:

```bash
npm install safirial-icons
```

También puede instalarse usando `pnpm` o `yarn`:

```bash
pnpm add safirial-icons
yarn add safirial-icons
```

---

## API pública

El archivo `public-api.ts` expone los siguientes elementos:

### Código completo de la API

```typescript
declare const ICON_BASE_PATH = "safirial-icons";
declare const iconList: readonly ["home", "sun", "chevron-arrow-down", "chevron-arrow-up", "chevron-arrow-left", "chevron-arrow-right", "email", "github", "linkedin", "minus", "moon", "palette", "plus"];
type IconName = typeof iconList[number];
declare function getIconPath(name: IconName): string;

export { ICON_BASE_PATH, getIconPath, iconList };
export type { IconName };
```

### Descripción de los elementos

- **`ICON_BASE_PATH`**: Constante que define la ruta base donde se sirven los SVG (`'safirial-icons'`).
- **`iconList`**: Lista de nombres de icono disponibles (por ejemplo, `'home'`, `'sun'`, `'email'`, `'github'`, etc.).
- **`IconName`**: Tipo TypeScript que representa cualquier nombre de icono válido.
- **`getIconPath(name: IconName): string`**: Función que devuelve la ruta completa del SVG a partir del nombre.

### Ejemplo de uso

```typescript
import { getIconPath, IconName } from 'safirial-icons';

const iconName: IconName = 'home';
const path = getIconPath(iconName); // 'safirial-icons/home.svg'
```

---

## Configuración de assets

Para que los iconos SVG estén disponibles en tu aplicación Angular, es necesario configurar los assets en el archivo `angular.json`:

```json
{
  "projects": {
    "tu-proyecto": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "**/*.svg",
                "input": "node_modules/safirial-icons/assets",
                "output": "safirial-icons"
              }
            ]
          }
        }
      }
    }
  }
}
```

Esta configuración copia todos los archivos SVG desde `node_modules/safirial-icons/assets` a la carpeta `safirial-icons` en el directorio de salida de la compilación, permitiendo que la función `getIconPath` resuelva correctamente las rutas de los iconos.

---

## Créditos y atribución

Los iconos SVG incluidos en este paquete provienen de las siguientes fuentes:

### Heroicons

Los iconos están basados en [Heroicons](https://heroicons.com/outline), creados por los desarrolladores de Tailwind CSS.

- **Sitio web**: [https://heroicons.com/outline](https://heroicons.com/outline)
- **Licencia**: MIT License
- **Versión**: v2.1.5

### SVG Repo

Algunos iconos adicionales provienen de [SVG Repo](https://www.svgrepo.com/), una colección de iconos SVG de código abierto.

- **Sitio web**: [https://www.svgrepo.com/](https://www.svgrepo.com/)
- **Licencias**: Varias (MIT, Apache 2.0, CC0)

Todos los iconos conservan sus licencias originales según corresponda. La atribución se mantiene de acuerdo con los términos de las respectivas licencias.
