import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';
import { ProductService } from '../../services/product.service';
import { SwalService } from '../../../../services/swal.service';
import { ToastrService } from 'ngx-toastr';
import { PaginationResultModel } from '../../../../common/models/pagenation-result.model';
import { ProductModel } from '../../models/product.model';
import { RequestModel } from '../../../../common/models/request.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit {
  result: PaginationResultModel<ProductModel[]> = new PaginationResultModel<ProductModel[]>();
  request: RequestModel = new RequestModel();
  pageNumbers: number[] = [];
  product: ProductModel = new ProductModel();

  constructor(private _product: ProductService,
    private _swal: SwalService,
    private _toastr: ToastrService,) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(pageNumber = 1) {
    this.request.pageNumber = pageNumber;
    this._product.getAll(this.request, res => {
      this.result = res;
      this.setPageNumbers();
    })
  }

  setPageNumbers() {
    const startPage = Math.max(1, this.result.pageNumber - 2);
    const endPage = Math.min(this.result.totalPageCount, this.result.pageNumber + 2);
    this.pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      this.pageNumbers.push(i);
    }
  }

  search() {
    if (this.request.search.length >= 3) {
      this.getAll(1);
    }
  }

  changeProductStatuc(id: string){
    let model = {_id: id};
      this._product.changeActiveStatus(model,res=>{
        this._toastr.info(res.message);
        this.getAll(this.request.pageNumber);
      });
  }

  removeById(id: string){
    this._swal.callSwal("Ürünü silmek istiyor musunuz?","Ürünü Sil","Sil",()=>{
      let model = {_id: id};
      this._product.removeById(model,res=>{
        this._toastr.info(res.message);
        this.getAll(this.request.pageNumber);
      })
    })
  }
}
