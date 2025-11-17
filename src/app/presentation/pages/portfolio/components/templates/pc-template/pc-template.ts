import { Component } from '@angular/core';
import { Curriculum } from '../../organisms/curriculum/curriculum';
import { Profile } from '../../organisms/profile/profile';
import { Work } from '../../organisms/work/work';
@Component({
  selector: 'app-pc-template',
  imports: [Curriculum, Profile, Work],
  template: `
  <section class="responsive-content">
    <app-curriculum></app-curriculum>
    <app-profile></app-profile>
    <app-work></app-work>
  </section>
  `,
  styles: `
    .responsive-content {
      display: flex;
      width: 100%;
    }

    @media (orientation: landscape) {
      .responsive-content {
        flex-direction: row;
      }
      .responsive-content > * {
        width: 33%;
      }
      .responsive-content app-profile {
        width: 34%;
      }
    }

    @media (orientation: portrait) {
      .responsive-content {
          flex-direction: column;
          gap: 3em;
      }
      .responsive-content > * {
        width: 100%;
      }
    }
  `
})
export class PcTemplate {

}
