import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-basic-data',
  imports: [CommonModule],
  template: `
      <div style="text-align: center;">
        <h1>Juan Pablo Canon</h1>
        <h4 style="font-size: 2.4em;">{{'software analyst and developer' | titlecase}}</h4>
    </div>
    <div class="line"></div>
  `,
  styles: `
  .line {
    width: 100%;
    height: .3em;
    background-color: var(--neutral-color-1);
  }

  h1,
  h4 {
      margin: 0;
      padding: 0;
      font-family: "Knewave", system-ui;
      font-weight: 400;
      font-size: 3em;
      font-style: normal;
      line-height: .7em;
      color: var(--contrast-color-0);
      margin-bottom: 0.3em;
    }
  `
})
export class ProfileBasicData {

}
