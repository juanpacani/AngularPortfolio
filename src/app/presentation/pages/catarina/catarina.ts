import { Component } from '@angular/core';
import { DeviceService } from '../../../core/services/device-service';
import { RouterOutlet } from '@angular/router';
import { Theming } from 'catarina';

@Component({
  selector: 'app-catarina',
  imports: [RouterOutlet],
  templateUrl: './catarina.html',
  styleUrl: './catarina.scss'
})
export class Catarina {
  private readonly CATARINA_RED = '#990002';//#E63946

  constructor(public deviceService: DeviceService,
    private theming: Theming
  ) {
    this.theming.calculatePrimaryColor(this.CATARINA_RED);
  }
}
