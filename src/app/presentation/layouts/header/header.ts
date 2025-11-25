import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
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
export class Header implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('buttonTheme', {static: false}) buttonTheme!: uiButton;


  //DOM VARS
  title?: string;
  docs?: string;
  downloadCV?: string;

  staticButtonsStyles: UiStyleRule[] = [{ p: 'border-top-left-radius', v: '0px' }, { p: 'border-top-right-radius', v: '0px' }];

  //Theming Vars Light Theme = False
  activeTheme: boolean = false;
  colorHex: string = '#AA2222';//AA22AA also 170, 34, 0 / 170, 34, 170 are good options
  private activeThemeSubscription: Subscription | undefined;

  //Lang Vars
  langOptions: string[] = [];
  lang?: string;
  private languageSubscription: Subscription | undefined;

  constructor(
    private translateService: Translate,
    private themingService: Theming,
  ) {
    this.themingService.generatePalettes(this.colorHex, this.activeTheme);

    //Language
    this.langOptions = translateService.languageMap;
  };

  ngOnInit() {
    this.languageSubscription = this.translateService.language$.subscribe(e => {
      this.lang = e;
      this.updateLanguages(e);
    }
    );

    this.activeThemeSubscription = this.themingService.activeTheme$.subscribe(e => {
      this.activeTheme = e;
    })

  };
  
  ngAfterViewInit(): void {
    this.buttonTheme.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
    this.activeThemeSubscription?.unsubscribe();
  };

  //Theming Events
  toggleTheme(): void {
    this.activeTheme = !this.activeTheme;
    this.themingService.generatePalettes(this.colorHex, this.activeTheme);   
    const iconName = this.activeTheme ? 'sun' : 'moon';
    this.buttonTheme.icon = {icon: iconName};
    this.buttonTheme.loadIcon();
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