import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { ProductModel } from '../products/models/product.model';
import { RequestModel } from '../../common/models/request.model';
import { CategoryModel } from '../categories/models/category.model';
import { CategoryService } from '../categories/services/category.service';
import { ProductService } from '../products/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: CategoryModel[] = [];
  request: RequestModel = new RequestModel();
  products: ProductModel[] = [];

  constructor(
    private _category: CategoryService,
    private _product: ProductService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._product.getAllForHomePage(this.request, res=> this.products = res);
  }
}
