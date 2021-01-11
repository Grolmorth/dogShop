import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product';


@Pipe({
  name: 'filterByPrice'
})
export class FilterPipe implements PipeTransform {

  transform(values: Product[], priceChecked: boolean, priceMin?: number, priceMax?: number): any {
    console.log(values)
    if(values===null){
      return null
    }
    if (!priceChecked) {
      return values;
    }
    return values.filter((item) => {
      item.price > priceMin && item.price < priceMax;
    })
  }
}
