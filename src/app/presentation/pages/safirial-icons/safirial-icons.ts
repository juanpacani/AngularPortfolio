import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeConsole } from '../catarina/components/docs-examples/code-console/code-console';
import { ButtonIconsExample } from '../catarina/components/docs-examples/example-components/button/button-icons-example.component';

@Component({
  selector: 'app-safirial-icons',
  imports: [CodeConsole, CommonModule],
  templateUrl: './safirial-icons.html',
  styleUrl: './safirial-icons.scss'
})
export class SafirialIcons {
  // Simplemente pasar la clase del componente
  buttonIconsComponent = ButtonIconsExample;
}
