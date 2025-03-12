import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../services/generic-http.service';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    private _http: GenericHttpService
  ) { }

  getAll(callBack: (res: CategoryModel[]) => void){
    this._http.get<CategoryModel[]>("categories",res=> callBack(res));
  }
}
