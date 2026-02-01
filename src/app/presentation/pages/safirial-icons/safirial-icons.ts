import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeConsole } from '../catarina/components/docs-examples/code-console/code-console';
import { iconList } from 'safirial-icons';
import { Icon } from 'catarina';
import { IconSizesExample } from '../catarina/components/docs-examples/example-components/icon/icon-sizes-example.component';

@Component({
  selector: 'app-safirial-icons',
  imports: [CodeConsole, CommonModule, Icon],
  templateUrl: './safirial-icons.html',
  styleUrl: './safirial-icons.scss'
})
export class SafirialIcons {
  // Simplemente pasar la clase del componente
  iconSizesExample = IconSizesExample;
  iconList = iconList;
}
