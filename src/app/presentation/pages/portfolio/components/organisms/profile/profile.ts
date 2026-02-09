import { Component } from '@angular/core';
import { ProfilePicture } from './molecules/profile-picture/profile-picture';
import { ProfileBasicData } from './molecules/profile-basic-data/profile-basic-data';
import { ProfileKnowledge } from './molecules/profile-knowledge/profile-knowledge';
import { Contact } from '../../../../../features/contact/contact';

@Component({
  selector: 'org-profile',
  imports: [ProfilePicture, ProfileBasicData, ProfileKnowledge, Contact],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

}
