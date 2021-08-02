import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe',
})
export class CpfPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }

    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
}
