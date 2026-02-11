import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Translate } from '../../../../../../../../core/utilities/translate/translate';
import { Subscription } from 'rxjs';

import languages from './profile-basic-data-languages.json';

@Component({
  selector: 'mol-profile-basic-data',
  imports: [CommonModule],
  templateUrl: 'profile-basic-data.html',
  styles: ``
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
