import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../services/generic-http.service';
import { BasketModel } from '../models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor( private _http: GenericHttpService) { }

  getAll(callBack: (res: BasketModel[])=> void){
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    let model = {userId: user._id};
    this._http.post<BasketModel[]>("baskets",model, res=> callBack(res));
  }
}
