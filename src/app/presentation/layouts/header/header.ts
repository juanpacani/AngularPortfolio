import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import languages from './header.language.json';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Translate } from '../../../core/utilities/translate/translate';
import { Button, ColorInput, SelectInput, Theming } from 'catarina';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, Button, SelectInput, ColorInput],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  //DOM VARS
  title?: string;
  docs?: string;
  downloadCV?: string;

  //Theming Vars Light Theme = False
  activeTheme: boolean = false;
  colorHex: string = '#AA2222';//AA22AA also 170, 34, 0 / 170, 34, 170 are good options

  //Lang Vars
  langOptions: string[] = [];
  lang?: string;
  private languageSubscription: Subscription | undefined;

  constructor(
    private translateService: Translate,
    private theming: Theming,
    private router: Router,
  ) {
    this.theming.generatePalettes(this.colorHex, this.activeTheme);

    this.activeTheme = true;

    //Language
    this.langOptions = translateService.languageMap;
  };

  ngOnInit() {
    this.languageSubscription = this.translateService.language$.subscribe(e => {
      this.lang = e;
      this.updateLanguages(e);
    }
    );
  };

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  };

  //Theming Events
  toggleTheme(): void {
    this.theming.calculateDynamicPalettes(this.activeTheme);
    this.activeTheme = !this.activeTheme;
  };

  onColorChange(hex: string) {
    this.theming.generatePalettes(this.colorHex, this.activeTheme);
  };

  //Language Events
  async toggleLanguage(language: string) {
    if (!this.lang) return;
    await this.translateService.toggleLanguaje(this.lang);
  };

  updateLanguages(lang: string) {
    this.title = (languages as any)[lang]?.title ?? '';
    this.docs = (languages as any)[lang]?.docs ?? '';
    this.downloadCV = (languages as any)[lang]?.download ?? '';
  }

  toHome() {
    this.router.navigate(['/portfolio']);
  }

  toCatarinaPreview() {
    this.router.navigate(['/catarina-preview']);
  }
}