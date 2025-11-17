import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Theming {
  //Light Theme = False
  private activeThemeSubject = new BehaviorSubject<boolean>(false);
  public activeTheme$ = this.activeThemeSubject.asObservable();

  //Palettes
  private allPalettesSubject = new BehaviorSubject<string[][]>([]);
  public allPalettes$ = this.allPalettesSubject.asObservable();

  generatePalettes(color: string, dark: boolean): string[][] {

    this.activeThemeSubject.next(dark);
    const theme: boolean = dark;
    const contrastTheme: boolean = !dark;

    //Step 1: Calculate the Colors
    const colors = this.hexToRgb(color);
    const secColor = this.secondaryColor(colors);
    const anlgColors = this.analogousColor(colors);

    //Setp 2: Get the Palettes
    const primaryColors: string[][] = this.palette(colors, theme);
    const complementaryColors: string[][] = this.palette({ red: secColor[0], green: secColor[1], blue: secColor[2] }, theme);
    const analogousColors1: string[][] = this.palette({ red: anlgColors[0], green: anlgColors[1], blue: anlgColors[2] }, theme);
    const analogousColors2: string[][] = this.palette({ red: anlgColors[3], green: anlgColors[4], blue: anlgColors[5] }, theme);
    const neutralColors: string[] = contrastTheme ? this.palette({ red: 255, green: 255, blue: 255 }, true)[0] : this.palette({ red: 0, green: 0, blue: 0 }, false)[0];
    const contrastNeutralColors: string[] = theme ? this.palette({ red: 0, green: 0, blue: 0 }, true)[1] : this.palette({ red: 255, green: 255, blue: 255 }, false)[1];;
    const elementsColors: string[] = this.elementsColors(theme, 3, 40);

    //Setp 3: Asign All Palettes to Local Variables
    let allPalettes: string[][] = primaryColors;
    allPalettes = allPalettes.concat(complementaryColors);
    allPalettes = allPalettes.concat(analogousColors1);
    allPalettes = allPalettes.concat(analogousColors2);
    allPalettes = allPalettes.concat([neutralColors]);       // Convertir a array bidimensional
    allPalettes = allPalettes.concat([contrastNeutralColors]); // Convertir a array bidimensional
    allPalettes = allPalettes.concat([elementsColors]); // Convertir a array bidimensional

    this.allPalettesSubject.next(allPalettes);

    //This can be optimized
    this.applyTheme();

    this.allPalettesSubject.next(allPalettes);
    return this.allPalettesSubject.value;
  };

  palette(colors: { red: number, green: number, blue: number }, dark: boolean,) {
    //Palette
    const colorsReturn: string[][] = [[], []];

    for (let i = 0; i < 10; i++) {
      const r = dark ? 0 + ((colors.red - 0) / (10 - 1) * i) : 255 + ((colors.red - 255) / (10 - 1) * i);
      const g = dark ? 0 + ((colors.green - 0) / (10 - 1) * i) : 255 + ((colors.green - 255) / (10 - 1) * i);
      const b = dark ? 0 + ((colors.blue - 0) / (10 - 1) * i) : 255 + ((colors.blue - 255) / (10 - 1) * i);
      colorsReturn[0].push(`rgb(${r}, ${g},${b})`);
    };

    //Contrast
    const contrastTheme: boolean = !dark;
    const steps = 9;
    const target = contrastTheme ? 0 : 255;

    const umbralR = (target - colors.red) / steps;
    const umbralG = (target - colors.green) / steps;
    const umbralB = (target - colors.blue) / steps;

    for (let i = 0; i <= steps; i++) {
      const r = Math.round(colors.red + umbralR * i);
      const g = Math.round(colors.green + umbralG * i);
      const b = Math.round(colors.blue + umbralB * i);

      colorsReturn[1].push(`rgb(${r}, ${g}, ${b})`);
    }
    return colorsReturn;
  };

  secondaryColor(colors: { red: number, green: number, blue: number }): number[] {
    const copyColors = { ...colors };
    copyColors.red = 255 - copyColors.red;
    copyColors.green = 255 - copyColors.green;
    copyColors.blue = 255 - copyColors.blue;
    return [copyColors.red, copyColors.green, copyColors.blue];
  };

  analogousColor(colors: { red: number, green: number, blue: number }): number[] {
    //Variación Cromatica Personalizada Inspirada en Rotaciones de Color RGB
    //Para calcular los secundarios del primario, solo es necesario cambiar color por colors
    const color = this.secondaryColor(colors);

    // --- 1. Normalizar valores a rango 0-1
    let r = color[2] / 255;
    let g = color[0] / 255;
    let b = color[1] / 255;
    /* 
    let r = colors.red / 255;
    let g = colors.green / 255;
    let b = colors.blue / 255;
    */

    // --- 2. Calcular max, min y delta
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let delta = max - min;

    // --- 3. Calcular Hue (H)
    let h = 0;
    if (delta !== 0) {
      if (max === r) {
        h = 60 * (((g - b) / delta) % 6);
      } else if (max === g) {
        h = 60 * ((b - r) / delta + 2);
      } else {
        h = 60 * ((r - g) / delta + 4);
      }
    }
    if (h < 0) h += 360;

    // --- 4. Calcular Saturación (S) y Luminosidad (L)
    let l = (max + min) / 2;
    let s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // --- 5. Función auxiliar HSL → RGB
    function hslToRgb(h: number, s: number, l: number): number[] {
      let c = (1 - Math.abs(2 * l - 1)) * s;
      let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      let m = l - c / 2;

      let r1 = 0, g1 = 0, b1 = 0;

      if (0 <= h && h < 60) [r1, g1, b1] = [c, x, 0];
      else if (60 <= h && h < 120) [r1, g1, b1] = [x, c, 0];
      else if (120 <= h && h < 180) [r1, g1, b1] = [0, c, x];
      else if (180 <= h && h < 240) [r1, g1, b1] = [0, x, c];
      else if (240 <= h && h < 300) [r1, g1, b1] = [x, 0, c];
      else[r1, g1, b1] = [c, 0, x];

      return [Math.round((r1 + m) * 255), Math.round((g1 + m) * 255), Math.round((b1 + m) * 255)];
    }

    // --- 6. Calcular los dos análogos (±30°)
    let analogous1 = hslToRgb((h + 30) % 360, s, l);
    let analogous2 = hslToRgb((h - 30 + 360) % 360, s, l);

    return analogous1.concat(analogous2);
  };

  elementsColors(theme: boolean, iteration: number, amplitude: number) {
    amplitude = amplitude / iteration;
    const colorsReturn: string[] = [];
    for (let i = 0; i < 5; i++) {
      let r = theme ? 0 + ((85 - 0) / (5 - 1) * i) : 0 + ((255 - 0) / (5 - 1) * i);
      let g = theme ? 0 + ((85 - 0) / (5 - 1) * i) : 0 + ((255 - 0) / (5 - 1) * i);
      let b = theme ? 0 + ((85 - 0) / (5 - 1) * i) : 0 + ((255 - 0) / (5 - 1) * i);

      if (i <= iteration && theme === false) {
        r = r + amplitude;
        g = g + amplitude;
        b = b + amplitude;
      } else if (theme === false){
        r = r - amplitude;
        g = g - amplitude;
        b = b - amplitude;
      }
      colorsReturn.push(`rgb(${r}, ${g},${b})`);
    };
    return colorsReturn;
  };

  applyTheme() {
    if (typeof document !== 'undefined') {

      const root = document.documentElement;

      for (let i = 0; i < 10; i++) {
        root.style.setProperty(`--primary-color-${i}`, this.allPalettesSubject.value[0][i]);
        root.style.setProperty(`--contrast-primary-color-${i}`, this.allPalettesSubject.value[1][i]);

        root.style.setProperty(`--complementary-color-${i}`, this.allPalettesSubject.value[2][i]);
        root.style.setProperty(`--contrast-complementary-color-${i}`, this.allPalettesSubject.value[3][i]);

        root.style.setProperty(`--analogous-color-1-${i}`, this.allPalettesSubject.value[4][i]);
        root.style.setProperty(`--contrast-analogous-color-1-${i}`, this.allPalettesSubject.value[5][i]);

        root.style.setProperty(`--analogous-color-2-${i}`, this.allPalettesSubject.value[6][i]);
        root.style.setProperty(`--contrast-analogous-color-2-${i}`, this.allPalettesSubject.value[7][i]);

        root.style.setProperty(`--neutral-color-${i}`, this.allPalettesSubject.value[8][i]);
        root.style.setProperty(`--contrast-neutral-color-${i}`, this.allPalettesSubject.value[9][i]);

        root.style.setProperty(`--element-color-${i}`, this.allPalettesSubject.value[10][i]);
      }
    }
  };

  hexToRgb(hex: string): { red: number; green: number; blue: number } {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      red: (bigint >> 16) & 255,
      green: (bigint >> 8) & 255,
      blue: bigint & 255,
    };
  };
}