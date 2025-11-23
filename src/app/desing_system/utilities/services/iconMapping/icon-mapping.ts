import { Component, Injectable, Type } from '@angular/core';
import { UiIconSun } from '../../../components/attoms/icons/staticIcons/sun/sun';
import { UiIconPalette } from '../../../components/attoms/icons/staticIcons/palette/palette';
import { UiIconChevronArrow } from '../../../components/attoms/icons/dynamicIcons/chevron-arrow-up/chevron-arrow';
import { UiIconPlus } from '../../../components/attoms/icons/plus/plus';
import { UiIconDocument } from '../../../components/attoms/icons/staticIcons/document/document';
import { UiIconCv } from '../../../components/attoms/icons/staticIcons/cv/cv';


@Injectable({
  providedIn: 'root'
})
export class IconMapping {
  //coding keys
  staticIcons = {
    sun: UiIconSun,
    palette: UiIconPalette,
    plus: UiIconPlus,
    document: UiIconDocument,
    cv: UiIconCv,
  };


  //Dinamic Icons
  dinamicIcons = {
    'chevron-arrow': UiIconChevronArrow,
  }

  iconRef = 'ui-icon-';

  staticIconMap = Object.fromEntries(
    Object.entries(this.staticIcons).map(([key, val]) => [`${this.iconRef}${key}`, val])
  );

  dinamicIconMap = Object.fromEntries(
    Object.entries(this.dinamicIcons).map(([key, val]) => [`${this.iconRef}${key}`, val])
  );

  getIconComponent(icon: string, isDinamic?: boolean, values?: Map<string, string>): Type<any> | null | undefined | void {
    if (isDinamic) {
      var iconInstance = this.dinamicIconMap[icon] || null;
      if (!iconInstance) return;
      for (let i = 0; i < values?.size!; i++) {
        try {
          iconInstance!;
        } catch (e) {
          console.log(e);
        }
      }
      console.log('IS DINAMIC');
    } else {
      return this.staticIconMap[icon] || null;
    }
  }

}