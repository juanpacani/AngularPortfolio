import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Button as CButton,
  // Panels
  Card as CCard,
  // Inputs
  CatInput as CCatInput,
  SelectInput as CSelectInput,
  // Theming
  Theming
} from 'catarina';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../../../../core/services/device-service';
import { Translate } from '../../../../../core/utilities/translate/translate';
import languages from './catarina-overview-languages.json';

@Component({
  selector: 'app-catarina-overview',
  imports: [
    //Components
    CButton,
    CCard,
    CCatInput,
    CSelectInput,
    FormsModule,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './catarina-overview.html',
  styleUrl: './catarina-overview.scss'
})
export class CatarinaOverview implements OnInit, OnDestroy {
  // Observable que emite el idioma actual
  language$;

  // Variables de los ejemplos
  searchValue: string = '';
  filterValue: string = '';

  //Subscriptions
  private languageSubscription: Subscription | undefined;

  constructor(
    public deviceService: DeviceService,
    private translate: Translate,
    private router: Router,
  ) {
    this.language$ = this.translate.language$;
  }

  ngOnInit(): void {
    this.languageSubscription = this.translate.language$.subscribe();
  }

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  }

  navigateToGetStarted(): void {
    const currentLang = this.translate.actualLanguage.toLowerCase();
    this.router.navigate(['/catarina', 'get-started', currentLang]);
  }

  // Getter que accede directamente al JSON para no almacenar en memoria
  getCurrentLanguageData(lang: string) {
    return (languages as any)[lang] || {};
  }

  // Getters individuales para acceso directo desde el template
  getTitle(lang: string): string {
    return this.getCurrentLanguageData(lang)?.title ?? '';
  }

  getSubtitle(lang: string): string {
    return this.getCurrentLanguageData(lang)?.subtitle ?? '';
  }

  getGetStartedButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.getStartedButton ?? '';
  }

  getDesktopExampleTitle(lang: string): string {
    return this.getCurrentLanguageData(lang)?.desktopExampleTitle ?? '';
  }

  getMobileExampleTitle(lang: string): string {
    return this.getCurrentLanguageData(lang)?.mobileExampleTitle ?? '';
  }

  getSearchPlaceholder(lang: string): string {
    return this.getCurrentLanguageData(lang)?.searchPlaceholder ?? '';
  }

  getFilterPlaceholder(lang: string): string {
    return this.getCurrentLanguageData(lang)?.filterPlaceholder ?? '';
  }

  getFilterButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.filterButton ?? '';
  }

  getExportButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.exportButton ?? '';
  }

  getViewMoreButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.viewMoreButton ?? '';
  }

  getUsersLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.stats?.users ?? '';
  }

  getSalesLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.stats?.sales ?? '';
  }

  getOrdersLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.stats?.orders ?? '';
  }

  getActivityLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.stats?.activity ?? '';
  }

  getImportantInfoTitle(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.importantInfo?.title ?? '';
  }

  getImportantInfoDescription(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.importantInfo?.description ?? '';
  }

  getPrimaryActionButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.importantInfo?.primaryAction ?? '';
  }

  getSecondaryActionButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.importantInfo?.secondaryAction ?? '';
  }

  getNotificationsTitle(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.notifications?.title ?? '';
  }

  getNotificationsDescription(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.notifications?.description ?? '';
  }

  getCancelButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.notifications?.cancelButton ?? '';
  }

  getAcceptButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.contentCards?.notifications?.acceptButton ?? '';
  }

  getMobileContentTitle(lang: string): string {
    return this.getCurrentLanguageData(lang)?.mobileContent?.title ?? '';
  }

  getMobileContentDescription(lang: string): string {
    return this.getCurrentLanguageData(lang)?.mobileContent?.description ?? '';
  }

  getActionButton(lang: string): string {
    return this.getCurrentLanguageData(lang)?.mobileContent?.actionButton ?? '';
  }

  getSelectOptions(lang: string): string[] {
    return this.getCurrentLanguageData(lang)?.selectOptions ?? [];
  }
}
