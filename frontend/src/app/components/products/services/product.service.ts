import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../services/generic-http.service';
import { MessageResponseModel } from '../../../common/models/message.response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: GenericHttpService) { }

  add(model: FormData, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("products/add", model, res=> callBack(res));
  }

  update(model: FormData, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("products/update", model, res=> callBack(res));
  }

  removeById(model: any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("products/removeById", model, res=> callBack(res));
  }

  changeActiveStatus(model: any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("products/changeActiveStatus", model, res=> callBack(res));
  }
}
