import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MusicTrack {
  title: string;
  artist: string;  
  src: string;
  cover?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Music {
  private audio = new Audio();
  private currentIndex: number = 0;

  tracks: MusicTrack[] = [
    { title: 'Introduction Rondo Capriccioso', artist: 'Saint-Saens', cover: 'Yuka Ishizuka (Violin) & Simon Lane (Piano)', src: '/multimedia/music/Saint-Saens_ Introduction _ Rondo Capriccioso - Yuka Ishizuka (violin) _ Simon Lane (piano).mp3'},
    { title: 'Bohemian Rhapsody', artist: 'Queen', src: '/multimedia/music/Queen - Bohemian Rhapsody.mp3'},
    { title: 'Ocean eyes', artist: 'Billie Eilish', src: '/multimedia/music/Billie Eilish - ocean eyes.mp3'}
  ];

  private playingSubject = new BehaviorSubject<boolean>(false);
  playing$ = this.playingSubject.asObservable();

  private speedSubject = new BehaviorSubject<number>(1);
  speed$ = this.speedSubject.asObservable();

  constructor() {
    this.audio.src = this.tracks[this.currentIndex].src;
    this.audio.onended = () => this.next();
  };

  play() {
    this.audio.play();
    this.playingSubject.next(true);
  }

  pause() {
    this.audio.pause();
    this.playingSubject.next(false);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.tracks.length;
    this.audio.src = this.tracks[this.currentIndex].src;
    this.audio.play();
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;
    this.audio.src = this.tracks[this.currentIndex].src;
    this.audio.play();
  }

  setSpeed(speed: number) {
    this.audio.playbackRate = speed;
    this.speedSubject.next(speed);
  }

  getCurrentTrack(): MusicTrack {
    return this.tracks[this.currentIndex];
  }
}