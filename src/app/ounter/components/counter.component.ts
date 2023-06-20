
import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button type="" (click)="increaseBy(+1)">+1</button>
    <button type="" (click)="resetCounter()">Reset</button>
    <button type="" (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 0;

  constructor() { }

   increaseBy(value: number): void{
      this.counter += value;
   }

   resetCounter(){
      this.counter = 0
   }

}
