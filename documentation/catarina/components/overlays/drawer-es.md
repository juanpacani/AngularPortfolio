# Drawer (`cat-drawer`)

El componente `Drawer` muestra un panel lateral deslizante desde cualquier lado de la pantalla.

> **⚠️ Requisito**: Este componente requiere `@angular/cdk@^20.2.14` como dependencia. Si usas `Dialog` o `Drawer`, instala CDK:
> ```bash
> npm install @angular/cdk@^20.2.14
> ```

### Importación

```typescript
import { Drawer } from 'catarina';
```

### Uso básico

```typescript
import { Component } from '@angular/core';
import { Drawer } from 'catarina';

@Component({
  selector: 'app-example',
  imports: [Drawer],
  template: `
    <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
      <h2>Panel Lateral</h2>
      <p>Contenido del drawer</p>
    </cat-drawer>
  `
})
export class ExampleComponent {
  showDrawer = true;
}
```

### Propiedades (Inputs)

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `side` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` | Lado desde el que se desliza el drawer |
| `variant` | `'surface' \| 'elevated' \| 'outlined'` | `'surface'` | Estilo visual del drawer |
| `customClass` | `string` | `''` | Clase CSS personalizada |

### Eventos (Outputs)

| Evento | Tipo | Descripción |
|--------|------|-------------|
| `closs` | `EventEmitter<boolean>` | Se emite cuando se cierra el drawer (siempre emite `false`) |

### Características

- **Botón de cierre**: Incluye un botón de cierre (`x-mark`) en la esquina superior
- **Cierre con Escape**: Se cierra automáticamente al presionar la tecla `Escape`
- **Fondo oscuro**: Muestra un fondo oscuro semitransparente que también cierra el drawer al hacer clic
- **CDK Overlay**: Utiliza Angular CDK Overlay para gestión automática de z-index, scroll y accesibilidad
- **Bloqueo de scroll**: El scroll del body se bloquea automáticamente cuando el drawer está abierto
- **Mejor accesibilidad**: Soporte automático para focus trap y gestión de múltiples overlays
- **Responsive**: El drawer se adapta automáticamente según el tamaño de pantalla y orientación

### Tamaños por lado

#### Valores por defecto

- **`left` / `right`**: 30vw de ancho, 100vh de alto
- **`top` / `bottom`**: 100vw de ancho, altura mínima de 10em

#### Responsive

**Móviles (portrait, max-width: 600px)**:
- **`left` / `right`**: 80vw de ancho
- **`top` / `bottom`**: 70vh de alto

**Tablet o móviles (landscape, max-width: 1024px)**:
- **`left` / `right`**: 50vw de ancho
- **`top` / `bottom`**: 50vh de alto

### Ejemplos

#### Drawer Example

<example name="drawer"></example>

#### Drawer desde la izquierda

```typescript
<cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
  <h2>Menú Lateral</h2>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
  </nav>
</cat-drawer>
```

#### Drawer desde la derecha

```typescript
<cat-drawer *ngIf="showDrawer" side="right" variant="elevated" (closs)="showDrawer = false">
  <h2>Panel de Configuración</h2>
  <p>Opciones aquí</p>
</cat-drawer>
```

#### Drawer desde arriba

```typescript
<cat-drawer *ngIf="showDrawer" side="top" (closs)="showDrawer = false">
  <h2>Notificaciones</h2>
  <ul>
    <li>Notificación 1</li>
  </ul>
</cat-drawer>
```

#### Drawer desde abajo

```typescript
<cat-drawer *ngIf="showDrawer" side="bottom" variant="outlined" (closs)="showDrawer = false">
  <h2>Acciones Rápidas</h2>
  <button>Acción 1</button>
</cat-drawer>
```

### Notas

- El drawer debe controlarse con `*ngIf` o similar para mostrarlo/ocultarlo
- El componente utiliza CDK Overlay para renderizado fuera del flujo del DOM principal
- El z-index y el stacking context se gestionan automáticamente por CDK
- El scroll del body se bloquea automáticamente cuando el drawer está abierto
- El botón de cierre está posicionado absolutamente en la esquina superior
- **Versión**: Desde la versión 20.3.3, el componente utiliza CDK Overlay en lugar de posicionamiento fijo manual
