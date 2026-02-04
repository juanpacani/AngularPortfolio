import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { DynamicBackgroundFeature } from '../../features/dynamic-background-feature/dynamic-background-feature';
import { Work } from './components/organisms/work/work';
import { Profile } from './components/organisms/profile/profile';
import { Curriculum } from './components/organisms/curriculum/curriculum';
import { Theming } from 'catarina';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, Curriculum, Profile, Work, DynamicBackgroundFeature],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  private readonly initialColorHex: string = '#16709c';

  constructor(private theming: Theming) {
    this.theming.calculatePrimaryColor(this.initialColorHex);
  }
}