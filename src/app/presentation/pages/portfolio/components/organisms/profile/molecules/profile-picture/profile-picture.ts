import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'mol-profile-picture',
  imports: [Button],
  templateUrl: 'profile-picture.html',
  styles: ``
})
export class ProfilePicture {
    visivility: boolean = true;
    changeVisibility(): void {
        this.visivility = !this.visivility;
    }
}