import { Component } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';
import { CategoryModel } from '../../../categories/models/category.model';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../../categories/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {
  categories: CategoryModel[] = [];
  images: File[] = [];
  imageUrls: any[] = [];
  productId: string = "";
  product: ProductModel = new ProductModel();

  constructor(
    private _category: CategoryService,
    private _toastr: ToastrService,
    private _product: ProductService,
    private _router: Router,
    private _activated: ActivatedRoute
  ) {
    this._activated.params.subscribe(res=>{
      this.productId = res["value"];
      this.getById();
    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._category.getAll(res => this.categories = res);
  }

  getById(){
    let model = {_id: this.productId};
    this._product.getById(model, res=> this.product = res);
  }

  addImage(imageUrl: string, file: any) {
    this.imageUrls.push(
      { imageUrl: imageUrl, name: file.name, size: file.size }
    );
  }
}
