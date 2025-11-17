import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Translate {
  public languageMap: string[] = ['ES', 'EN'];
  public actualLanguage: string = navigator.language.substring(0, 2).toUpperCase();;

  //Observer
  private languageSubject = new BehaviorSubject<string>(this.actualLanguage);
  public language$ = this.languageSubject.asObservable();
  
  async toggleLanguaje(newL: string): Promise<string> {   
    
    this.actualLanguage = this.languageMap.find(e => {
      return e === newL;
    }) || 'EN';
    this.languageSubject.next(this.actualLanguage);
    
    return this.actualLanguage;
  };
}
