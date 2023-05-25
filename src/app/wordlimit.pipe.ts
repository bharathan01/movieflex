import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordlimit'
})
export class WordlimitPipe implements PipeTransform {

  transform(value: any, limit: any): any {
    return value.lenght > limit
      ? value
        .split(" ")
        .slice(0, limit)
        .join(" ") + "..."
      : value;
  }

}
