import { Component } from '@angular/core';
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

@Component({
  selector: 'app-catarina-preview-desktop-template',
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
  templateUrl: './catarina-preview-desktop-template.html',
  styleUrl: './catarina-preview-desktop-template.scss'
})
export class CatarinaPreviewDesktopTemplate {
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

  constructor(public deviceService: DeviceService) { }
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
