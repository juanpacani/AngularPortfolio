import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [RouterOutlet],
  template: `
  <section>
    <router-outlet></router-outlet>
  </section>
  `,
  styles: ``
})
export class Body {

}
