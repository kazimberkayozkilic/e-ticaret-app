import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../services/generic-http.service';
import { BasketModel } from '../models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor( private _http: GenericHttpService) { }

}
