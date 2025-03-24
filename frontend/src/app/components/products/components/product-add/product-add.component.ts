import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';
import { CategoryModel } from '../../../categories/models/category.model';
import { CategoryService } from '../../../categories/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent  implements OnInit {
  categories: CategoryModel[] = [];
  images: File[] = [];
  imageUrls: any[] = [];

  constructor(  private _category: CategoryService,
    private _toastr: ToastrService,
    private _product: ProductService,
    private _router: Router) {
  }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._category.getAll(res => this.categories = res);
  }
}
