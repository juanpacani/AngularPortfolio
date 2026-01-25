import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import languages from './header.language.json';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Translate } from '../../../core/utilities/translate/translate';
import { Button, ColorInput, Menu, SelectInput, Theming } from 'catarina';
import { Router } from '@angular/router';
import { DeviceService } from '../../../core/services/device-service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, Button, SelectInput, ColorInput, Menu],
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
  colorHex: string = '#16709c';//AA22AA also 170, 34, 0 / 170, 34, 170 are good options
  private themeSub: Subscription | undefined;

  //Lang Vars
  langOptions: string[] = [];
  lang?: string;
  private languageSubscription: Subscription | undefined;

  constructor(
    private translateService: Translate,
    private theming: Theming,
    private router: Router,
    public deviceService: DeviceService,
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
    });
    this.themeSub = this.theming.activeTheme$.subscribe(e => this.activeTheme = e)
  };

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
    this.themeSub?.unsubscribe();
  };

  //Theming Events
  toggleTheme(): void {
    this.activeTheme = !this.activeTheme;
    this.theming.calculateDynamicPalettes(this.activeTheme);
  };

  onColorChange(hex: string) {
    this.theming.calculatePrimaryColor(this.colorHex);
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

  downloadCurriculum() {
    if (this.lang === 'ES') {
      window.open(
        'https://github.com/user-attachments/files/24846763/ES_JUAN_PABLO_CANON_N._Resume.pdf',
        '_blank'
      );
    } else if (this.lang === 'EN') {
      window.open(
        'https://github.com/user-attachments/files/24846762/EN_JUAN_PABLO_CANON_N._Resume.pdf',
        '_blank'
      );
    }
  }

  //Navigation
  toHome() {
    this.router.navigate(['/portfolio']);
  }

  toCatarinaPreview() {
    this.router.navigate(['/catarina-preview']);
  }
}