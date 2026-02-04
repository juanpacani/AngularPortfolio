# Safirial Icons – SVG Icons Package for Angular

**Safirial Icons** is an SVG icons package designed for Angular applications.  
It provides a list of icon names and a function to resolve static paths to SVGs.

This package can be used independently or together with the `catarina` and `safirial` design systems.

- **npm package**: `safirial-icons`
- **Version**: `0.1.0`

---

## Installation

In an Angular project:

```bash
npm install safirial-icons
```

It can also be installed using `pnpm` or `yarn`:

```bash
pnpm add safirial-icons
yarn add safirial-icons
```

---

## Public API

The `public-api.ts` file exposes the following elements:

### Complete API code

```typescript
declare const ICON_BASE_PATH = "safirial-icons";
declare const iconList: readonly ["home", "sun", "chevron-arrow-down", "chevron-arrow-up", "chevron-arrow-left", "chevron-arrow-right", "email", "github", "linkedin", "minus", "moon", "palette", "plus"];
type IconName = typeof iconList[number];
declare function getIconPath(name: IconName): string;

export { ICON_BASE_PATH, getIconPath, iconList };
export type { IconName };
```

### Element descriptions

- **`ICON_BASE_PATH`**: Constant that defines the base path where SVGs are served (`'safirial-icons'`).
- **`iconList`**: List of available icon names (e.g., `'home'`, `'sun'`, `'email'`, `'github'`, etc.).
- **`IconName`**: TypeScript type that represents any valid icon name.
- **`getIconPath(name: IconName): string`**: Function that returns the complete SVG path from the name.

### Usage example

```typescript
import { getIconPath, IconName } from 'safirial-icons';

const iconName: IconName = 'home';
const path = getIconPath(iconName); // 'safirial-icons/home.svg'
```

---

## Assets configuration

For SVG icons to be available in your Angular application, you need to configure assets in the `angular.json` file:

```json
{
  "projects": {
    "your-project": {
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

This configuration copies all SVG files from `node_modules/safirial-icons/assets` to the `safirial-icons` folder in the build output directory, allowing the `getIconPath` function to correctly resolve icon paths.

---

## Credits and attribution

The SVG icons included in this package come from the following sources:

### Heroicons

The icons are based on [Heroicons](https://heroicons.com/outline), created by the developers of Tailwind CSS.

- **Website**: [https://heroicons.com/outline](https://heroicons.com/outline)
- **License**: MIT License
- **Version**: v2.1.5

### SVG Repo

Some additional icons come from [SVG Repo](https://www.svgrepo.com/), an open-source SVG icons collection.

- **Website**: [https://www.svgrepo.com/](https://www.svgrepo.com/)
- **Licenses**: Various (MIT, Apache 2.0, CC0)

All icons retain their original licenses as applicable. Attribution is maintained in accordance with the terms of the respective licenses.
