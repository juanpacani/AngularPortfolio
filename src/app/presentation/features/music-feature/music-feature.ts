import { Component, OnDestroy, OnInit } from '@angular/core';
import { Music, MusicTrack } from './service/music';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { uiButton } from '../../../desing_system/components/attoms/ui/button/button';

@Component({
  selector: 'app-music-feature',
  imports: [NgIf, uiButton],
  templateUrl: './music-feature.html',
  styleUrl: './music-feature.scss'
})
export class MusicFeature implements OnInit, OnDestroy{
  isPlaying: boolean = false;
  speed: number = 1;

  currentTrack?: MusicTrack;

  playSubcription: Subscription | undefined;
  speedSubcription: Subscription | undefined;

  constructor(
    private musicService: Music,
  ) { 
    this.playSubcription = this.musicService.playing$.subscribe(status => {
      this.isPlaying = status;
    });

    this.speedSubcription = this.musicService.speed$.subscribe(speed => {
      this.speed = speed;
    })
  }

  ngOnInit(): void {
    this.currentTrack = this.musicService.getCurrentTrack();
  }

  ngOnDestroy(): void {
    this.playSubcription?.unsubscribe();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.musicService.pause();
    } else {
      this.musicService.play();
    }
  }

  next() {
    this.musicService.next();
    this.currentTrack = this.musicService.getCurrentTrack();
  }

  previous() {
    this.musicService.previous();
    this.currentTrack = this.musicService.getCurrentTrack();
  }

  doubleSpeed() {
    const newSpeed = this.speed === 2 ? 1 : 2;
    this.musicService.setSpeed(newSpeed);
  }
}
