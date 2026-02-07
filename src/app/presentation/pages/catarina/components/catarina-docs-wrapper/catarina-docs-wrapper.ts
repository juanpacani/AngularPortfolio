import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentationViewer } from '../../../../features/documentation-viewer/documentation-viewer';
import { Translate } from '../../../../../core/utilities/translate/translate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catarina-docs-wrapper',
  imports: [DocumentationViewer],
  template: `
    <app-documentation-viewer 
      [indexPath]="indexPath"
      [showIndex]="true"
      [initialDoc]="currentDoc"
      [onNavigate]="handleNavigate">
    </app-documentation-viewer>
  `
})
export class CatarinaDocsWrapper implements OnInit, OnDestroy {
  currentDoc: string = 'get-started';

  // SUbscriptions
  routeSubscription?: Subscription | undefined;
  langSubscription?: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: Translate
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      const doc = params['doc'] || 'get-started';
      const lang = params['lang'];
      
      this.currentDoc = doc;
      
      // Si no hay idioma en la ruta, redirige con el idioma actual
      if (!lang) {
        const currentLang = this.translate.actualLanguage.toLowerCase();
        this.router.navigate(['/catarina', doc, currentLang], { replaceUrl: true });
      }
    });

    this.langSubscription = this.translate.language$.subscribe(lang => {
      const newLang = lang.toLowerCase();
      const currentRouteLang = this.route.snapshot.params['lang'];
      
      if (currentRouteLang && currentRouteLang !== newLang && this.currentDoc) {
        this.router.navigate(['/catarina', this.currentDoc, newLang], { replaceUrl: true });
      }
    });
  }
  
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.langSubscription?.unsubscribe();
  }

  get indexPath(): string {
    const lang = this.route.snapshot.params['lang'] || this.translate.actualLanguage.toLowerCase();
    return `/documentation/catarina/${lang}/_index.json`;
  }

  handleNavigate = (path: string, lang: string) => {
    const docName = this.extractDocName(path);
    this.router.navigate(['/catarina', docName, lang]);
  };

  private extractDocName(path: string): string {
    const withoutExt = path.replace(/-[a-z]{2}\.md$/, '').replace('.md', '');
    const parts = withoutExt.split('/');
    return parts[parts.length - 1];
  }
}
