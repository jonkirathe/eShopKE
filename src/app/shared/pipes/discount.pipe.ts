import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../models/product";

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(product: Product): number {
    let discount = 0;
    if(product){
       discount = Math.round(((product.price - product.discountedPrice)/product.price)*100)
      console.info(discount)
    }
    return discount;
  }

}
