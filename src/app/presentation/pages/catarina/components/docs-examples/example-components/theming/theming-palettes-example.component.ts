import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theming } from 'catarina';
import { Subscription } from 'rxjs';

interface ColorInfo {
  name: string;
  cssVar: string;
  rgb: string;
  hex: string;
}

@Component({
  selector: 'app-theming-palettes-example',
  imports: [CommonModule],
  template: `
    <div class="palettes-container">
      <!-- Group 1: Primary colors -->
      <div class="color-group">
        <h3 class="group-title">Primary colors</h3>
        <div class="colors-row">
          <div *ngFor="let color of primaryColors" class="color-item">
            <div 
              class="color-circle" 
              [style.background-color]="color.rgb"
              [style.border-color]="borderColor">
            </div>
            <span class="color-label">{{ color.name }}</span>
            <span class="color-value">{{ color.rgb }}<br>{{ color.hex }}</span>
          </div>
        </div>
      </div>

      <!-- Group 2: Neutral colors -->
      <div class="color-group">
        <h3 class="group-title">Neutral colors</h3>
        <div class="colors-row">
          <div *ngFor="let color of neutralColors" class="color-item">
            <div 
              class="color-circle" 
              [style.background-color]="color.rgb"
              [style.border-color]="borderColor">
            </div>
            <span class="color-label">{{ color.name }}</span>
            <span class="color-value">{{ color.rgb }}<br>{{ color.hex }}</span>
          </div>
        </div>
      </div>

      <!-- Group 3: Element colors -->
      <div class="color-group">
        <h3 class="group-title">Element colors</h3>
        <div class="colors-row">
          <div *ngFor="let color of elementColors" class="color-item">
            <div 
              class="color-circle" 
              [style.background-color]="color.rgb"
              [style.border-color]="borderColor">
            </div>
            <span class="color-label">{{ color.name }}</span>
            <span class="color-value">{{ color.rgb }}<br>{{ color.hex }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .palettes-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1.5rem;
    }

    .color-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .group-title {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--neutral-color-9);
    }

    .colors-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      align-items: flex-start;
    }

    .color-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      min-width: 80px;
    }

    .color-circle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 2px dashed;
      flex-shrink: 0;
    }

    .color-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--neutral-color-7);
      text-align: center;
    }

    .color-value {
      font-size: 0.75rem;
      font-family: 'Courier New', monospace;
      color: var(--neutral-color-6);
      text-align: center;
      word-break: break-all;
    }
  `
})
export class ThemingPalettesExample implements OnInit, OnDestroy {
  primaryColors: ColorInfo[] = [];
  neutralColors: ColorInfo[] = [];
  elementColors: ColorInfo[] = [];
  borderColor: string = '';

  private subscription?: Subscription;

  constructor(private theming: Theming) {}

  ngOnInit() {
    // Subscribes to palettes changes from Theming service
    this.subscription = this.theming.allPalettes$.subscribe((palettes: string[][]) => {
      this.processPalettes(palettes);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private processPalettes(palettes: string[][]) {
    // Index 0 = primary colors, Index 1 = neutral colors, Index 2 = element colors
    const primaryPalette = palettes[0] || [];
    const neutralPalette = palettes[1] || [];
    const elementPalette = palettes[2] || [];

    // Process primary colors
    this.primaryColors = primaryPalette.map((rgb, index) => ({
      name: `Primary ${index}`,
      cssVar: `--primary-color-${index}`,
      rgb: this.formatRgb(rgb),
      hex: this.rgbToHex(rgb)
    }));

    // Process neutral colors
    this.neutralColors = neutralPalette.map((rgb, index) => ({
      name: `Neutral ${index}`,
      cssVar: `--neutral-color-${index}`,
      rgb: this.formatRgb(rgb),
      hex: this.rgbToHex(rgb)
    }));

    // Process element colors
    this.elementColors = elementPalette.map((rgb, index) => ({
      name: `Element ${index}`,
      cssVar: `--element-color-${index}`,
      rgb: this.formatRgb(rgb),
      hex: this.rgbToHex(rgb)
    }));

    // Gets border color from neutral palette (last color)
    if (neutralPalette.length > 0) {
      this.borderColor = this.formatRgb(neutralPalette[neutralPalette.length - 1]);
    } else {
      this.borderColor = 'rgb(0, 0, 0)';
    }
  }

  private formatRgb(rgb: string): string {
    // Formats RGB string to "rgb(r, g, b)" format
    // Handles both "rgb(153, 0, 2)" and "153, 0, 2" formats
    // Rounds decimal values to integers
    if (rgb.startsWith('rgb')) {
      // Extracts and rounds decimal values
      const rgbMatch = rgb.match(/\d+\.?\d*/g);
      if (rgbMatch && rgbMatch.length === 3) {
        const r = Math.round(parseFloat(rgbMatch[0]));
        const g = Math.round(parseFloat(rgbMatch[1]));
        const b = Math.round(parseFloat(rgbMatch[2]));
        return `rgb(${r}, ${g}, ${b})`;
      }
      return rgb;
    }
    // Handles "153, 0, 2" or "63.75, 63.75, 63.75" formats
    const rgbMatch = rgb.match(/\d+\.?\d*/g);
    if (rgbMatch && rgbMatch.length === 3) {
      const r = Math.round(parseFloat(rgbMatch[0]));
      const g = Math.round(parseFloat(rgbMatch[1]));
      const b = Math.round(parseFloat(rgbMatch[2]));
      return `rgb(${r}, ${g}, ${b})`;
    }
    return `rgb(${rgb})`;
  }

  private rgbToHex(rgb: string): string {
    // Converts RGB string to hex format
    // RGB format: "rgb(153, 0, 2)", "rgb(63.75, 63.75, 63.75)" or "153, 0, 2"
    // Handles decimal values by rounding them
    const rgbMatch = rgb.match(/\d+\.?\d*/g);
    if (rgbMatch && rgbMatch.length === 3) {
      const r = Math.round(parseFloat(rgbMatch[0]));
      const g = Math.round(parseFloat(rgbMatch[1]));
      const b = Math.round(parseFloat(rgbMatch[2]));
      return `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('')}`;
    }
    return rgb;
  }

  static rgbToHex(rgb: string): string {
    // Converts RGB string to hex format
    // RGB format: "rgb(153, 0, 2)", "rgb(63.75, 63.75, 63.75)" or "153, 0, 2"
    // Handles decimal values by rounding them
    const rgbMatch = rgb.match(/\d+\.?\d*/g);
    if (rgbMatch && rgbMatch.length === 3) {
      const r = Math.round(parseFloat(rgbMatch[0]));
      const g = Math.round(parseFloat(rgbMatch[1]));
      const b = Math.round(parseFloat(rgbMatch[2]));
      return `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('')}`;
    }
    return rgb;
  }

  static get htmlCode(): string {
    return `<div class="palettes-container">
  <!-- Group 1: Primary colors -->
  <div class="color-group">
    <h3 class="group-title">Primary colors</h3>
    <div class="colors-row">
      <div *ngFor="let color of primaryColors" class="color-item">
        <div 
          class="color-circle" 
          [style.background-color]="color.rgb"
          [style.border-color]="borderColor">
        </div>
        <span class="color-label">{{ color.name }}</span>
        <span class="color-value">{{ color.rgb }}<br>{{ color.hex }}</span>
      </div>
    </div>
  </div>

  <!-- Group 2: Neutral colors -->
  <div class="color-group">
    <h3 class="group-title">Neutral colors</h3>
    <div class="colors-row">
      <div *ngFor="let color of neutralColors" class="color-item">
        <div 
          class="color-circle" 
          [style.background-color]="color.rgb"
          [style.border-color]="borderColor">
        </div>
        <span class="color-label">{{ color.name }}</span>
        <span class="color-value">{{ color.rgb }}<br>{{ color.hex }}</span>
      </div>
    </div>
  </div>

  <!-- Group 3: Element colors -->
  <div class="color-group">
    <h3 class="group-title">Element colors</h3>
    <div class="colors-row">
      <div *ngFor="let color of elementColors" class="color-item">
        <div 
          class="color-circle" 
          [style.background-color]="color.rgb"
          [style.border-color]="borderColor">
        </div>
        <span class="color-label">{{ color.name }}</span>
        <span class="color-value">{{ color.rgb }}<br>{{ color.hex }}</span>
      </div>
    </div>
  </div>
</div>`;
  }

  static get cssCode(): string {
    return `.palettes-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
}

.color-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.group-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--neutral-color-9);
}

.colors-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 80px;
}

.color-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px dashed;
  flex-shrink: 0;
}

.color-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--neutral-color-7);
  text-align: center;
}

.color-value {
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
  color: var(--neutral-color-6);
  text-align: center;
  word-break: break-all;
}`;
  }

  static get tsCode(): string {
    return `import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theming } from 'catarina';
import { Subscription } from 'rxjs';

interface ColorInfo {
  name: string;
  cssVar: string;
  rgb: string;
  hex: string;
}

@Component({
  selector: 'app-theming-palettes-example',
  imports: [CommonModule],
  template: \`...\`,
  styles: \`...\`
})
export class ThemingPalettesExample implements OnInit, OnDestroy {
  primaryColors: ColorInfo[] = [];
  neutralColors: ColorInfo[] = [];
  elementColors: ColorInfo[] = [];
  borderColor: string = '';

  private subscription?: Subscription;

  constructor(private theming: Theming) {}

  ngOnInit() {
    // Subscribes to palettes changes from Theming service
    this.subscription = this.theming.allPalettes$.subscribe((palettes: string[][]) => {
      this.processPalettes(palettes);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private processPalettes(palettes: string[][]) {
    // Index 0 = primary colors, Index 1 = neutral colors, Index 2 = element colors
    const primaryPalette = palettes[0] || [];
    const neutralPalette = palettes[1] || [];
    const elementPalette = palettes[2] || [];

    // Process primary colors
    this.primaryColors = primaryPalette.map((rgb, index) => ({
      name: \`Primary \${index}\`,
      cssVar: \`--primary-color-\${index}\`,
      rgb: this.formatRgb(rgb),
      hex: this.rgbToHex(rgb)
    }));

    // Process neutral colors
    this.neutralColors = neutralPalette.map((rgb, index) => ({
      name: \`Neutral \${index}\`,
      cssVar: \`--neutral-color-\${index}\`,
      rgb: this.formatRgb(rgb),
      hex: this.rgbToHex(rgb)
    }));

    // Process element colors
    this.elementColors = elementPalette.map((rgb, index) => ({
      name: \`Element \${index}\`,
      cssVar: \`--element-color-\${index}\`,
      rgb: this.formatRgb(rgb),
      hex: this.rgbToHex(rgb)
    }));

    // Gets border color from neutral palette (last color)
    if (neutralPalette.length > 0) {
      this.borderColor = this.formatRgb(neutralPalette[neutralPalette.length - 1]);
    } else {
      this.borderColor = 'rgb(0, 0, 0)';
    }
  }

  private formatRgb(rgb: string): string {
    // Formats RGB string to "rgb(r, g, b)" format
    // Handles both "rgb(153, 0, 2)" and "153, 0, 2" formats
    // Rounds decimal values to integers
    if (rgb.startsWith('rgb')) {
      // Extracts and rounds decimal values
      const rgbMatch = rgb.match(/\\d+\\.?\\d*/g);
      if (rgbMatch && rgbMatch.length === 3) {
        const r = Math.round(parseFloat(rgbMatch[0]));
        const g = Math.round(parseFloat(rgbMatch[1]));
        const b = Math.round(parseFloat(rgbMatch[2]));
        return \`rgb(\${r}, \${g}, \${b})\`;
      }
      return rgb;
    }
    // Handles "153, 0, 2" or "63.75, 63.75, 63.75" formats
    const rgbMatch = rgb.match(/\\d+\\.?\\d*/g);
    if (rgbMatch && rgbMatch.length === 3) {
      const r = Math.round(parseFloat(rgbMatch[0]));
      const g = Math.round(parseFloat(rgbMatch[1]));
      const b = Math.round(parseFloat(rgbMatch[2]));
      return \`rgb(\${r}, \${g}, \${b})\`;
    }
    return \`rgb(\${rgb})\`;
  }

  private rgbToHex(rgb: string): string {
    // Converts RGB string to hex format
    // RGB format: "rgb(153, 0, 2)", "rgb(63.75, 63.75, 63.75)" or "153, 0, 2"
    // Handles decimal values by rounding them
    const rgbMatch = rgb.match(/\\d+\\.?\\d*/g);
    if (rgbMatch && rgbMatch.length === 3) {
      const r = Math.round(parseFloat(rgbMatch[0]));
      const g = Math.round(parseFloat(rgbMatch[1]));
      const b = Math.round(parseFloat(rgbMatch[2]));
      return \`#\${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('')}\`;
    }
    return rgb;
  }

  static rgbToHex(rgb: string): string {
    // Converts RGB string to hex format
    // RGB format: "rgb(153, 0, 2)", "rgb(63.75, 63.75, 63.75)" or "153, 0, 2"
    // Handles decimal values by rounding them
    const rgbMatch = rgb.match(/\\d+\\.?\\d*/g);
    if (rgbMatch && rgbMatch.length === 3) {
      const r = Math.round(parseFloat(rgbMatch[0]));
      const g = Math.round(parseFloat(rgbMatch[1]));
      const b = Math.round(parseFloat(rgbMatch[2]));
      return \`#\${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('')}\`;
    }
    return rgb;
  }
}`;
  }
}
