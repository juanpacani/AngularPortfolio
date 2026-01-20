import { Component } from '@angular/core';
//import { UiIconGithub } from '../../../desing_system/components/attoms/icons/staticIcons/github/github';
//import { UiIconLinkedin } from '../../../desing_system/components/attoms/icons/staticIcons/linkedin/linkedin';
//import { UiIconEmail } from '../../../desing_system/components/attoms/icons/staticIcons/email/email';
//import { ALL_ICONS } from '../../../desing_system/components/attoms/icons/common/all_icons_arrays';
import { DeviceService } from '../../../core/services/device-service';
import { NgIf } from '@angular/common';
import { Icon } from 'catarina';

@Component({
  selector: 'app-contact',
  imports: [Icon, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(
    public deviceService: DeviceService,
  ) { }

  toGithub() {
    console.log('TOGITHUB');
    
    window.open("https://github.com/Hydenaky", "_blank", "noopener,noreferrer");
  }
  toLinkedin() {
    console.log('TOLINKEDIN');
    window.open("https://www.linkedin.com/in/juan-pablo-ca%C3%B1on-n-b304bb339/", "_blank", "noopener noreferrer");
  }

  toGmail() {
    console.log('TOGMAIL');
    const mail = "jpcnwkacc.irl@gmail.com";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
}