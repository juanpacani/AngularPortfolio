import { Component, OnDestroy, OnInit } from '@angular/core';
import languages from './header.language.json';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UiSelect } from '../../../desing_system/components/attoms/ui/select/select';
import { InputColor } from '../../../desing_system/components/attoms/ui/input-color/input-color';
import { Theming } from '../../../desing_system/utilities/services/theming/theming';
import { uiButton } from '../../../desing_system/components/attoms/ui/button/button';
import { UiStyleRule } from '../../../desing_system/data/ui-constants';
import { Translate } from '../../../core/utilities/translate/translate';

@Component({
  selector: 'app-header',
  imports: [FormsModule, uiButton, UiSelect, InputColor],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  //DOM VARS
  title?: string;
  docs?: string;
  downloadCV?: string;

  staticButtonsStyles: UiStyleRule[] = [{ p: 'border-top-left-radius', v: '0px' }, { p: 'border-top-right-radius', v: '0px' }];

  //Theming Vars Light Theme = False
  activeTheme: boolean = false;
  colorHex: string = '#AA2222';//AA22AA also 170, 34, 0 / 170, 34, 170 are good options

  //Lang Vars
  langOptions: string[] = [];
  lang?: string;
  private subLang: Subscription | undefined;

  constructor(
    private translateService: Translate,
    private themingService: Theming,
  ) {
    this.themingService.generatePalettes(this.colorHex, this.activeTheme);

    //Language
    this.langOptions = translateService.languageMap;
  };

  ngOnInit() {
    this.subLang = this.translateService.language$.subscribe(e => {
      this.lang = e;
      this.updateLanguages(e);
    }
    );
  };

  ngOnDestroy(): void {
    this.subLang?.unsubscribe();
  };


  //Theming Events
  toggleTheme(): void {
    this.activeTheme = !this.activeTheme;
    this.themingService.generatePalettes(this.colorHex, this.activeTheme);
  };

  onColorChange(hex: string) {
    this.themingService.generatePalettes(this.colorHex, this.activeTheme);
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
}