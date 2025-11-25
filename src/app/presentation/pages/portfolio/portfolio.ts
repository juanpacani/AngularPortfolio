import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PcTemplate } from './components/templates/pc-template/pc-template';
import { uiButton } from '../../../desing_system/components/attoms/ui/button/button';
import { DynamicBackgroundFeature } from '../../features/dynamic-background-feature/dynamic-background-feature';
import { MusicFeature } from '../../features/music-feature/music-feature';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, PcTemplate, DynamicBackgroundFeature],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
}
