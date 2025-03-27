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

  deleteImage(_id: string, index: number) {
    let model = {
      _id: _id,
      index: index
    }
    this._product.removeImageByProductIdAndIndex(model, res=>{
      this._toastr.warning(res.message);
      this.getById();
    })
  }

  getImages(event: any) {
    const file: File[] = Array.from(event.target.files);
    this.images.push(...file);

    for (let i = 0; i < event.target.files.length; i++) {
      const element = event.target.files[i];

      const reader = new FileReader();
      reader.readAsDataURL(element);

      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.addImage(imageUrl, file);
      }
    }
  }
}
