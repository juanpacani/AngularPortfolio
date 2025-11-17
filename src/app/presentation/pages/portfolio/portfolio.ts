import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PcTemplate } from './components/templates/pc-template/pc-template';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, PcTemplate],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

  knowledges: String[] = [
    'knowledges/angular.svg', 
    'knowledges/c++.svg',
    'knowledges/flutter.svg',
    'knowledges/nestjs.svg',
    'knowledges/postgresql.svg',
    'knowledges/mongodb.svg',
  ];

}
