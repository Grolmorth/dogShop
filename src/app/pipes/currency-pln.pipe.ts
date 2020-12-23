
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPln'
})
export class CurrencyPlnPipe implements PipeTransform {

  transform(value: number): string {
    const currencyCode: string = 'PLN';

    let newValue: string = value.toFixed(2) + currencyCode;

    return (newValue)
  }

}
