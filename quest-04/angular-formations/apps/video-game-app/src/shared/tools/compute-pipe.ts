import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compute',
  pure: true //by default for execute once time for pure function
})
export class ComputePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.info('compute', Math.random()*100)
    return value*100;
  }

}
