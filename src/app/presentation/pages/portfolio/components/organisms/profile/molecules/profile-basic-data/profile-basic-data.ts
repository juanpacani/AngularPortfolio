import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Translate } from '../../../../../../../../core/utilities/translate/translate';
import { Subscription } from 'rxjs';

import languages from './profile-basic-data-languages.json';

@Component({
  selector: 'mol-profile-basic-data',
  imports: [CommonModule],
  template: `
      <div style="text-align: center;">
        <h1>Juan Pablo Canon</h1>
        <h4 style="font-size: 2.4em;">{{title | titlecase}}</h4>
    </div>
    <div class="line"></div>
  `,
  styles: `
  .line {
    width: 100%;
    height: .3em;
    background-color: var(--neutral-color-1);
  }
  
  h1,
  h4 {
    margin: 0;
    padding: 0;
    margin-bottom: 0.3em;
    line-height: 1em;

    color: var(--contrast-color-0);
    
      font-family: "Roboto Condensed", sans-serif;
      font-optical-sizing: auto;
      font-weight: bold;
      font-size: 3em;
      font-style: normal;
    }
  `
})
export class ProfileBasicData implements OnInit, OnDestroy {
  title?: string;


  //Subscriptions
  sub: Subscription | undefined;
  constructor(
    private translate: Translate,
  ) { }

  ngOnInit(): void {
    this.sub = this.translate.language$.subscribe(e =>
      this.updateLanguages(e),
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  updateLanguages(lang: string) {
    this.title = (languages as any)[lang]?.title ?? '';
  }
}
