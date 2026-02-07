import { Component } from '@angular/core';
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
    window.open("https://github.com/juanpacani", "_blank", "noopener,noreferrer");
  }
  toLinkedin() {
    window.open("https://www.linkedin.com/in/juan-pablo-ca%C3%B1on-n-b304bb339/", "_blank", "noopener noreferrer");
  }

  toGmail() {
    const mail = "jpcnwkacc.irl@gmail.com";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
}