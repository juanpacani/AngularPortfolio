import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon, iconList, Theming } from 'catarina';
import { IconSizesExample } from '../catarina/components/docs-examples/example-components/icon/icon-sizes-example.component';
import { DocumentationViewer } from '../../features/documentation-viewer/documentation-viewer';
import { Translate } from '../../../core/utilities/translate/translate';

@Component({
  selector: 'app-safirial-icons',
  imports: [CommonModule, Icon, DocumentationViewer],
  templateUrl: './safirial-icons.html',
  styleUrl: './safirial-icons.scss'
})
export class SafirialIcons {
  private readonly initialColorHex: string = '#16709c';
  // Simplemente pasar la clase del componente
  iconSizesExample = IconSizesExample;
  iconList = iconList;

  constructor(private translate: Translate, private theming: Theming) {
    this.theming.calculatePrimaryColor(this.initialColorHex);
  }

  get indexPath(): string {
    const lang = this.translate.actualLanguage.toLowerCase();
    return `/documentation/safirial-icons/${lang}/_index.json`;
  }
}
