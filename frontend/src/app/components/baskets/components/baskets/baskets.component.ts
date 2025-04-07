import { Component } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';

@Component({
  selector: 'app-baskets',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './baskets.component.html',
  styleUrl: './baskets.component.css'
})
export class BasketsComponent {

}
