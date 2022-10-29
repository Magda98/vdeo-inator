import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: string): string {
    const num = Number(value)
    // thousands
    if (num >= 1000 && num <= 999_999) {
      return `${Math.round((num / 1000))} tys.`;
    }
    // millions
    else if (num >= 1_000_000) {
      return `${Math.round((num / 100_000)) / 10} mln`;
    }

    return value
  }
}
