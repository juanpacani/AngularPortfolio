import { Component, Injectable, Type } from '@angular/core';
import { UiIconSun } from '../../../components/attoms/icons/sun/sun';
import { UiIconPalette } from '../../../components/attoms/icons/palette/palette';
import { UiIconChevronArrow } from '../../../components/attoms/icons/chevron-arrow/chevron-arrow';
import { UiIconPlus } from '../../../components/attoms/icons/plus/plus';
import { UiIconDocument } from '../../../components/attoms/icons/document/document';
import { UiIconCv } from '../../../components/attoms/icons/cv/cv';


@Injectable({
  providedIn: 'root'
})
export class IconMapping {
  //coding keys
  baseIcons = {
    sun: UiIconSun,
    palette: UiIconPalette,
    'chevron-arrow': UiIconChevronArrow,
    plus: UiIconPlus,
    document: UiIconDocument,
    cv: UiIconCv,
  };

  iconRef = 'ui-icon-';

  iconMap = Object.fromEntries(
    Object.entries(this.baseIcons).map(([key, val]) => [`${this.iconRef}${key}`, val])
  );


  getIconComponent(icon: string): Type<any> | null {
    return this.iconMap[icon] || null;
  }

}