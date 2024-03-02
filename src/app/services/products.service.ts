import { Injectable } from '@angular/core';
import productsData from '../../assets/data/data.json';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productsList: Product[] = productsData;
}
