import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Button as CButton,
  // Panels
  Card as CCard, Accordion as CAccordion, AccordionGroup as CAccordionGroup,
  // Inputs
  ColorInput as CColorInput,
  SelectInput as CSelectInput,
  //Overlays
  Dialog as CDialog, CatInput as CCatInput
} from 'catarina';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../../../../core/services/device-service';
import { Translate } from '../../../../../core/utilities/translate/translate';
import { Subscription } from 'rxjs';
import languages from '../catarina-preview-languages.json';

@Component({
  selector: 'app-catarina-preview-mobile-template',
  imports: [
        //Angular
    NgFor,
    NgIf,
    FormsModule,

    //Components
    CButton,

    // Panels
    CCard,
    CAccordion,
    CAccordionGroup,

    //Inputs
    CColorInput,
    CCatInput,
    CSelectInput,

    //Overlays
    CDialog,
  ],
  templateUrl: './catarina-preview-mobile-template.html',
  styleUrl: './catarina-preview-mobile-template.scss'
})
export class CatarinaPreviewMobileTemplate implements OnInit, OnDestroy {
  clickCount = 0;

  color: string = '#A40000';
  isDark: boolean = false;

  //Dialog variables
  surfacedDialogActive: boolean = false;
  elevatedDialogActive: boolean = false;
  outlinedDialogActive: boolean = false;

  //Accordion
  accordionStatus: boolean = false;

  // Select Input
  options: string[] = ['A', 'B', 'C', 'D'];
  value: string = '';

  //Language Variables
  typographies?: string;
  colors?: string;
  cards?: string;
  buttons?: string;
  inputs?: string;
  overlays?: string;
  accordion?: string;
  accordionGroup?: string;
  primary?: string;
  grayScale?: string;
  elements?: string;
  variants?: string;
  sizes?: string;
  withIcons?: string;
  states?: string;
  clickEvents?: string;
  normal?: string;
  disabled?: string;
  clickMe?: string;
  clicks?: string;
  home?: string;
  next?: string;
  both?: string;
  small?: string;
  medium?: string;
  large?: string;
  primaryButton?: string;
  secondaryButton?: string;
  contrastButton?: string;
  outlineButton?: string;
  ghostButton?: string;
  textInput?: string;
  numberInput?: string;
  selectInput?: string;
  colorInputWithIcons?: string;
  colorInputWithoutIcons?: string;
  surfacedDialog?: string;
  elevatedDialog?: string;
  outlinedDialog?: string;
  dialog?: string;
  scrolleable?: string;
  nonScrolleable?: string;
  surfaceSecondary?: string;
  elevatedContrast?: string;
  outlinedOutlined?: string;

  //Subscriptions
  private languageSubscription: Subscription | undefined;

  constructor(
    public deviceService: DeviceService,
    private translate: Translate
  ) { }

  ngOnInit(): void {
    this.languageSubscription = this.translate.language$.subscribe(e =>
      this.updateLanguages(e),
    );
  }

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  }

  updateLanguages(lang: string) {
    this.typographies = (languages as any)[lang]?.typographies ?? '';
    this.colors = (languages as any)[lang]?.colors ?? '';
    this.cards = (languages as any)[lang]?.cards ?? '';
    this.buttons = (languages as any)[lang]?.buttons ?? '';
    this.inputs = (languages as any)[lang]?.inputs ?? '';
    this.overlays = (languages as any)[lang]?.overlays ?? '';
    this.accordion = (languages as any)[lang]?.accordion ?? '';
    this.accordionGroup = (languages as any)[lang]?.accordionGroup ?? '';
    this.primary = (languages as any)[lang]?.primary ?? '';
    this.grayScale = (languages as any)[lang]?.grayScale ?? '';
    this.elements = (languages as any)[lang]?.elements ?? '';
    this.variants = (languages as any)[lang]?.variants ?? '';
    this.sizes = (languages as any)[lang]?.sizes ?? '';
    this.withIcons = (languages as any)[lang]?.withIcons ?? '';
    this.states = (languages as any)[lang]?.states ?? '';
    this.clickEvents = (languages as any)[lang]?.clickEvents ?? '';
    this.normal = (languages as any)[lang]?.normal ?? '';
    this.disabled = (languages as any)[lang]?.disabled ?? '';
    this.clickMe = (languages as any)[lang]?.clickMe ?? '';
    this.clicks = (languages as any)[lang]?.clicks ?? '';
    this.home = (languages as any)[lang]?.home ?? '';
    this.next = (languages as any)[lang]?.next ?? '';
    this.both = (languages as any)[lang]?.both ?? '';
    this.small = (languages as any)[lang]?.small ?? '';
    this.medium = (languages as any)[lang]?.medium ?? '';
    this.large = (languages as any)[lang]?.large ?? '';
    this.primaryButton = (languages as any)[lang]?.primaryButton ?? '';
    this.secondaryButton = (languages as any)[lang]?.secondaryButton ?? '';
    this.contrastButton = (languages as any)[lang]?.contrastButton ?? '';
    this.outlineButton = (languages as any)[lang]?.outlineButton ?? '';
    this.ghostButton = (languages as any)[lang]?.ghostButton ?? '';
    this.textInput = (languages as any)[lang]?.textInput ?? '';
    this.numberInput = (languages as any)[lang]?.numberInput ?? '';
    this.selectInput = (languages as any)[lang]?.selectInput ?? '';
    this.colorInputWithIcons = (languages as any)[lang]?.colorInputWithIcons ?? '';
    this.colorInputWithoutIcons = (languages as any)[lang]?.colorInputWithoutIcons ?? '';
    this.surfacedDialog = (languages as any)[lang]?.surfacedDialog ?? '';
    this.elevatedDialog = (languages as any)[lang]?.elevatedDialog ?? '';
    this.outlinedDialog = (languages as any)[lang]?.outlinedDialog ?? '';
    this.dialog = (languages as any)[lang]?.dialog ?? '';
    this.scrolleable = (languages as any)[lang]?.scrolleable ?? '';
    this.nonScrolleable = (languages as any)[lang]?.nonScrolleable ?? '';
    this.surfaceSecondary = (languages as any)[lang]?.surfaceSecondary ?? '';
    this.elevatedContrast = (languages as any)[lang]?.elevatedContrast ?? '';
    this.outlinedOutlined = (languages as any)[lang]?.outlinedOutlined ?? '';
  }
  //Just an test event for the buttons
  counterEvent(): void {
    this.clickCount++;
  }

  //Input Events
  onValue(value: string) {
    console.log(value);
  }

  //Dialog Events
  openDialog(index: number) {
    switch (index) {
      case 0:
        this.surfacedDialogActive = true;
        break;
      case 1:
        this.elevatedDialogActive = true;
        break;
      case 2:
        this.outlinedDialogActive = true;
        break;
      default:
        break;
    }
  }

  closeDialog(value: boolean, index: number) {
    switch (index) {
      case 0:
        this.surfacedDialogActive = value;
        break;
      case 1:
        this.elevatedDialogActive = value;
        break;
      case 2:
        this.outlinedDialogActive = value;
        break;
      default:
        break;
    }
  }

  //Accordion Events
  switchStatus() {
    this.accordionStatus = !this.accordionStatus;
  }
}
