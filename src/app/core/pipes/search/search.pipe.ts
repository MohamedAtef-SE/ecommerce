import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../interfaces/Models';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(product: IProduct[], filter: string): IProduct[] {
    filter = filter.toLowerCase()
    return product.filter((product)=> { return product.title.toLowerCase().includes(filter) } );
  }

}
