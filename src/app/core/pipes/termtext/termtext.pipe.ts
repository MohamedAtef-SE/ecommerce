import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext',
  standalone: true
})
export class TermtextPipe implements PipeTransform {

  transform(value: string, splitter : string, take : number): string {
    return value.split(splitter,take).join( splitter);
  }

}
