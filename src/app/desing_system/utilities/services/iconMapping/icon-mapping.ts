import { Component, Injectable, Type, ViewContainerRef } from '@angular/core';
import { UiIconSun } from '../../../components/attoms/icons/staticIcons/sun/sun';
import { UiIconPalette } from '../../../components/attoms/icons/staticIcons/palette/palette';
import { UiIconChevronArrow } from '../../../components/attoms/icons/dynamicIcons/chevron-arrow/chevron-arrow';
import { UiIconDocument } from '../../../components/attoms/icons/staticIcons/document/document';
import { UiIconCv } from '../../../components/attoms/icons/staticIcons/cv/cv';
import { UiIconCircleCross } from '../../../components/attoms/icons/dynamicIcons/cross/circle-cross';
import { DYNAMIC_ICONS, STATIC_ICONS } from '../../../components/attoms/icons/common/all_icons_arrays';


@Injectable({
  providedIn: 'root'
})
export class IconMapping {
  //coding keys
  iconRef = 'ui-icon-';

  //coding keys
  staticIconMap = this.toPrefixedMap(this.toMap(STATIC_ICONS));
  dynamicIconMap = this.toPrefixedMap(this.toMap(DYNAMIC_ICONS));

  private toMap(icons: any[]) {
    const map: Record<string, any> = {};

    for (const icon of icons) {
      const className = icon.name;
      const raw = className.replace(/^UiIcon/, '');
      const kebab = raw.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      map[kebab] = icon;
    }
    return map;
  }

  private toPrefixedMap(map: Record<string, any>) {
    return Object.fromEntries(
      Object.entries(map).map(([key, val]) => [`${key}`, val])
    );
  }

  /* staticIconMap = Object.fromEntries(
    Object.entries(this.staticIconObject).map(([key, val]) => [`${key}`, val])
  );

  dynamicIconMap = Object.fromEntries(
    Object.entries(this.dynamicIconObject).map(([key, val]) => [`${key}`, val])
  ); */

  //Recheck
  getIconComponent(icon: string, viewContainerRef: ViewContainerRef, isDynamic?: boolean, values?: Map<string, string>): Type<any> | null | undefined | void { 
       
    const cpmClass = isDynamic ? this.dynamicIconMap[icon] || null : this.staticIconMap[icon] || null;
    if (!cpmClass) return;
    const cmpRef = viewContainerRef.createComponent<any>(cpmClass);
    const instance = cmpRef.instance as any;

    values?.forEach((value: string, key: string) => {
      instance[key] = value;
    });

    return;

    /* 
        if (isDynamic) {
    
        } else {
          const cpmClass = this.staticIconMap[icon] || null;
          if (!cpmClass) return;
    
          const cmpRef = viewContainerRef.createComponent<any>(cpmClass);
          const instance = cmpRef.instance as any;
          return;
        } */
  }

}