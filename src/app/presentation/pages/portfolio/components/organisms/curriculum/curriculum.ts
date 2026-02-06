import { Component } from '@angular/core';
import { Translate } from '../../../../../../core/utilities/translate/translate';
import languages from './curriculum-languages.json';
import { NgFor, AsyncPipe, NgIf } from '@angular/common';
import { Accordion, AccordionGroup} from 'catarina';


@Component({
  selector: 'org-curriculum',
  imports: [NgFor, NgIf, Accordion, AccordionGroup, AsyncPipe],
  templateUrl: './curriculum.html',
  styles: ``
})
export class Curriculum {
  // Observable que emite el idioma actual
  language$;

  constructor(
    private translate: Translate,
  ) {
    this.language$ = this.translate.language$;
  }

  // Getters que acceden directamente al JSON sin almacenar en memoria
  getCurrentLanguageData(lang: string) {
    return (languages as any)[lang] || {};
  }

  // Getters individuales para acceso directo desde el template
  getSummaryButtonLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.summaryButtonLabel ?? '';
  }

  getEducationButtonLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.educationButtonLabel ?? '';
  }

  getExperienceButtonLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.experienceButtonLabel ?? '';
  }

  getSummary(lang: string): string {
    return this.getCurrentLanguageData(lang)?.summary ?? '';
  }

  getEducation(lang: string): {studyTitle: string, studyPlace: string}[] {
    return this.getCurrentLanguageData(lang)?.education ?? [];
  }

  getExperience(lang: string): {jobTitle: string, companyName: string, dateInterval: string, description: string}[] {
    return this.getCurrentLanguageData(lang)?.experience ?? [];
  }

  getProjectsButtonLabel(lang: string): string {
    return this.getCurrentLanguageData(lang)?.projectsButtonLabel ?? '';
  }

  getProjects(lang: string): {projectName: string, dateInterval: string, description: string}[] {
    return this.getCurrentLanguageData(lang)?.projects ?? [];
  }
}