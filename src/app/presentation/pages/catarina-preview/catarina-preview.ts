import { Component} from '@angular/core';
import { Button as CButton, 
// Panels
Card as CCard, Accordion as CAccordion, AccordionGroup as CAccordionGroup, 
// Inputs
ColorInput as CColorInput, 
SelectInput as CSelectInput,
//Overlays
Dialog as CDialog, CatInput as CCatInput} from 'catarina';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../../core/services/device-service';
import { CatarinaPreviewDesktopTemplate } from './templates/catarina-preview-desktop-template/catarina-preview-desktop-template';
import { CatarinaPreviewMobilTemplate } from './templates/catarina-preview-mobil-template/catarina-preview-mobil-template';

@Component({
  selector: 'app-catarina-preview',
    imports: [CatarinaPreviewDesktopTemplate, CatarinaPreviewMobilTemplate],
  templateUrl: './catarina-preview.html',
  styleUrl: './catarina-preview.scss'
})
export class CatarinaPreview {
  constructor(public deviceService: DeviceService) {}
}
