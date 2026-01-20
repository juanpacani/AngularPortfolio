import { Component, OnInit, signal } from '@angular/core';
import { Button as CButton, Icon as CIcon, Theming, 
// Panels
Card as CCard, Accordion as CAccordion, AccordionGroup as CAccordionGroup, 
// Inputs
ColorInput as CColorInput, 
SelectInput as CSelectInput,
//Overlays
Dialog as CDialog, CatInput as CCatInput} from 'catarina';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catarina-preview',
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
  templateUrl: './catarina-preview.html',
  styleUrl: './catarina-preview.scss'
})
export class CatarinaPreview implements OnInit {
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
  options: string[] = ['A','B','C','D'];
  value: string = '';
  //Life Cicle Events
  constructor(
    private theming: Theming
  ) { }

  ngOnInit(): void {
    this.theming.generatePalettes(this.color, this.isDark);
    this.isDark = !this.isDark;
  }

  //Events
  //Change the colors of the theming
  handleTheme(): void {
    this.theming.calculateDynamicPalettes(this.isDark);
    this.isDark = !this.isDark;
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
  switchStatus(){
    this.accordionStatus = !this.accordionStatus;
  }
}
