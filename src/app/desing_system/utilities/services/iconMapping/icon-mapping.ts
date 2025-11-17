import { Component, Injectable, Type } from '@angular/core';
import { Sun } from '../../../components/attoms/icons/sun/sun';


@Injectable({
  providedIn: 'root'
})
export class IconMapping {
  private iconMap: Record<string, any> = {
    'icon-sun': Sun,
  };

  getIconComponent(icon: string): Type<any> | null {
    return this.iconMap[icon] || null;
  }
}