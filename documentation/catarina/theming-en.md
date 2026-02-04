# Theming

Catarina's theming system allows you to completely customize the colors and themes of your application.

## Import

```typescript
import { Theming } from 'catarina';
```

## Basic usage

```typescript
import { Component } from '@angular/core';
import { Theming } from 'catarina';

@Component({
  selector: 'app-example',
  template: `...`
})
export class ExampleComponent {
  constructor(private theming: Theming) {
    // Generate palettes with a primary color and theme
    this.theming.generatePalettes('#A40000', false); // false = light theme
  }
}
```

## Properties and Methods

### Main methods

#### `generatePalettes(primaryColor: string, isDark: boolean): void`

Generates all color palettes based on a primary color and theme.

**Parameters:**
- `primaryColor`: Hexadecimal color (e.g., `'#A40000'`)
- `isDark`: `true` for dark theme, `false` for light theme

#### `calculateDynamicPalettes(isDark: boolean): void`

Recalculates dynamic palettes when the theme changes.

**Parameters:**
- `isDark`: `true` for dark theme, `false` for light theme

#### `calculatePrimaryColor(hex: string): void`

Recalculates palettes when the primary color changes.

**Parameters:**
- `hex`: New primary hexadecimal color

### Observables

#### `activeTheme$: Observable<boolean>`

Observable that emits the current theme state (`true` = dark, `false` = light).

#### `allPalettes$: Observable<string[][]>`

Observable that emits all generated color palettes.

## CSS Variables

The theming system generates the following CSS variables:

### Primary colors
- `--primary-color-0` to `--primary-color-4`: Primary color variations

### Neutral colors (grayscale)
- `--neutral-color-0` to `--neutral-color-9`: Grayscale from lightest to darkest

### Element colors
- `--element-color-0` to `--element-color-4`: Colors for interface elements

## Examples

### Change theme

```typescript
toggleTheme(): void {
  this.activeTheme = !this.activeTheme;
  this.theming.calculateDynamicPalettes(this.activeTheme);
}
```

### Change primary color

```typescript
onColorChange(hex: string) {
  this.theming.calculatePrimaryColor(hex);
}
```

### Subscribe to theme changes

```typescript
import { Subscription } from 'rxjs';

export class ExampleComponent {
  private themeSub?: Subscription;

  constructor(private theming: Theming) {
    this.themeSub = this.theming.activeTheme$.subscribe(isDark => {
      console.log('Current theme:', isDark ? 'Dark' : 'Light');
    });
  }

  ngOnDestroy() {
    this.themeSub?.unsubscribe();
  }
}
```

### Get all palettes

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

## Notes

- The system automatically generates color variations based on the primary color
- Palettes are calculated dynamically to maintain visual consistency
- Light and dark themes have different palettes to optimize contrast
- All CSS variables are automatically updated when you change the theme or primary color
