import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy():void {
    this.counter += 1;
  }

  resetCounter():void{
    this.counter = 10
  }

  decrementBy():void{
    this.counter -= 1;
  }

}
