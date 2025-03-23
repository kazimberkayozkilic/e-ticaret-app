import { Component } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

}
