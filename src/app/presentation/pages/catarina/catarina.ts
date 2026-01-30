import { Component} from '@angular/core';
import { DeviceService } from '../../../core/services/device-service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-catarina',
    imports: [RouterOutlet],
  templateUrl: './catarina.html',
  styleUrl: './catarina.scss'
})
export class Catarina {
  constructor(public deviceService: DeviceService) {}
}
