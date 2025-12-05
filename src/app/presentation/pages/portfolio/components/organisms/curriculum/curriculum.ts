import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiAccordion } from '../../../../../../desing_system/components/molecules/ui/accordion/accordion';
import { UiAccordionGroup } from '../../../../../../desing_system/components/organisms/accordion-group/accordion-group';
import { Subscription } from 'rxjs';
import { Translate } from '../../../../../../core/utilities/translate/translate';
import languages from './curriculum-languages.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'org-curriculum',
  imports: [UiAccordion, UiAccordionGroup, NgFor],
  templateUrl: './curriculum.html',
  styles: ``
})
export class Curriculum implements OnInit, OnDestroy {
  //Language Variables
  summaryButtonLabel?: string;
  educationButtonLabel?: string;
  experienceButtonLabel?: string;
  summary?: string;
  education?: {studyTitle: string, studyPlace: string}[];
  experience?: {jobTitle: string, companyName: string, dateInterval: string, description: string}[];

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
    this.summaryButtonLabel = (languages as any)[lang]?.summaryButtonLabel ?? '';
    this.educationButtonLabel = (languages as any)[lang]?.educationButtonLabel ?? '';
    this.experienceButtonLabel = (languages as any)[lang]?.experienceButtonLabel ?? '';
    this.summary = (languages as any)[lang]?.summary ?? '';
    this.education = (languages as any)[lang]?.education ?? '';
    this.experience = (languages as any)[lang]?.experience ?? '';
  }
}