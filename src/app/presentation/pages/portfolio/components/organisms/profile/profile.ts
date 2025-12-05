import { Component } from '@angular/core';
import { ProfilePicture } from './molecules/profile-picture/profile-picture';
import { ProfileBasicData } from './molecules/profile-basic-data/profile-basic-data';
import { ProfileKnowledge } from './molecules/profile-knowledge/profile-knowledge';

@Component({
  selector: 'org-profile',
  imports: [ProfilePicture, ProfileBasicData, ProfileKnowledge],
  templateUrl: './profile.html',
  styles: ``
})
export class Profile {

}
