import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleMapping {
  private stylesMap: Record<string, any> = {
    'flexDirection': 'flex-direction:',
  };

  getStyle(qualifiedName: string) {    
    return this.stylesMap[qualifiedName] || null;
  }
}
