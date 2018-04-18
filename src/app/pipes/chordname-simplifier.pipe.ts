import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chordnameSimplifier'
})
export class ChordnameSimplifierPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace('major','').replace('minor','m').replace('*',"<sup>o</sup>");
  }

}
