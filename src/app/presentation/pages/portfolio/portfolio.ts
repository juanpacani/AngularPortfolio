import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { DynamicBackgroundFeature } from '../../features/dynamic-background-feature/dynamic-background-feature';
import { Work } from './components/organisms/work/work';
import { Profile } from './components/organisms/profile/profile';
import { Curriculum } from './components/organisms/curriculum/curriculum';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, Curriculum, Profile, Work, DynamicBackgroundFeature],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
}