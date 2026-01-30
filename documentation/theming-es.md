# Theming

El sistema de theming de Catarina permite personalizar completamente los colores y temas de tu aplicación.

## Import

```typescript
import { Theming } from 'catarina';
```

## Uso básico

```typescript
import { Component } from '@angular/core';
import { Theming } from 'catarina';

@Component({
  selector: 'app-example',
  template: `...`
})
export class ExampleComponent {
  constructor(private theming: Theming) {
    // Generar paletas con un color primario y tema
    this.theming.generatePalettes('#A40000', false); // false = tema claro
  }
}
```

## Propiedades y Métodos

### Métodos principales

#### `generatePalettes(primaryColor: string, isDark: boolean): void`

Genera todas las paletas de colores basadas en un color primario y un tema.

**Parámetros:**
- `primaryColor`: Color hexadecimal (ej: `'#A40000'`)
- `isDark`: `true` para tema oscuro, `false` para tema claro

#### `calculateDynamicPalettes(isDark: boolean): void`

Recalcula las paletas dinámicas cuando cambia el tema.

**Parámetros:**
- `isDark`: `true` para tema oscuro, `false` para tema claro

#### `calculatePrimaryColor(hex: string): void`

Recalcula las paletas cuando cambia el color primario.

**Parámetros:**
- `hex`: Nuevo color hexadecimal primario

### Observables

#### `activeTheme$: Observable<boolean>`

Observable que emite el estado actual del tema (`true` = oscuro, `false` = claro).

#### `allPalettes$: Observable<string[][]>`

Observable que emite todas las paletas de colores generadas.

## Variables CSS

El sistema de theming genera las siguientes variables CSS:

### Colores primarios
- `--primary-color-0` a `--primary-color-4`: Variaciones del color primario

### Colores neutros (escala de grises)
- `--neutral-color-0` a `--neutral-color-9`: Escala de grises del más claro al más oscuro

### Colores de elementos
- `--element-color-0` a `--element-color-4`: Colores para elementos de la interfaz

## Ejemplos

### Cambiar tema

```typescript
toggleTheme(): void {
  this.activeTheme = !this.activeTheme;
  this.theming.calculateDynamicPalettes(this.activeTheme);
}
```

### Cambiar color primario

```typescript
onColorChange(hex: string) {
  this.theming.calculatePrimaryColor(hex);
}
```

### Suscribirse a cambios de tema

```typescript
import { Subscription } from 'rxjs';

export class ExampleComponent {
  private themeSub?: Subscription;

  constructor(private theming: Theming) {
    this.themeSub = this.theming.activeTheme$.subscribe(isDark => {
      console.log('Tema actual:', isDark ? 'Oscuro' : 'Claro');
    });
  }

  ngOnDestroy() {
    this.themeSub?.unsubscribe();
  }
}
```

### Obtener todas las paletas

```typescript
export class ExampleComponent {
  allPalettes: string[][] = [];

  constructor(private theming: Theming) {
    this.theming.allPalettes$.subscribe(palettes => {
      this.allPalettes = palettes;
    });
  }
}
```

## Notas

- El sistema genera automáticamente variaciones de color basadas en el color primario
- Las paletas se calculan dinámicamente para mantener la consistencia visual
- Los temas claro y oscuro tienen paletas diferentes para optimizar el contraste
- Todas las variables CSS se actualizan automáticamente cuando cambias el tema o el color primario
