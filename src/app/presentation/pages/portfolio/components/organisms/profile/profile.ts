import { Component } from '@angular/core';
import { ProfilePicture } from './molecules/profile-picture/profile-picture';
import { ProfileBasicData } from './molecules/profile-basic-data/profile-basic-data';
import { ProfileKnowledge } from './molecules/profile-knowledge/profile-knowledge';

@Component({
  selector: 'app-profile',
  imports: [ProfilePicture, ProfileBasicData, ProfileKnowledge],
  template: `
  <section class="container">
    <app-profile-picture></app-profile-picture>
    <app-profile-basic-data></app-profile-basic-data>
    <app-profile-knowledge style="width: 100%;"></app-profile-knowledge>
  </section>
  `,
  styles: `
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
  `
})
export class Profile {

}
