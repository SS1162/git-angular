import { Component, signal, Signal, computed, WritableSignal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: '<app-calc-signal>',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calc-signal.html',
  styleUrl: './calc-signal.scss'
})
export class CalcSignal {
  num: WritableSignal<number> = signal(0)
  sum: WritableSignal<number> = signal(0)
  action: WritableSignal<number> = signal(0)
  func: Signal<number> = computed(() => {
    if (this.action() === 1) {
      return this.sum()+this.num()
    }
    else if (this.action() === 2) {
      return this.sum()-this.num()
    }
    else if (this.action() === 3) {
    return this.sum()*this.num()
    }
    else if (this.action() === 4) {
     return this.sum()/this.num()
    }
    return 0
  })

  funcPlus() {
    this.sum.set(this.func())
    this.num.set(0)
    this.action.set(1)
  }

  funcminus() {
    this.sum.set(this.func())
    this.num.set(0)
    this.action.set(2)
  }

  funcmult() {
    this.sum.set(this.func())
    this.num.set(0)
    this.action.set(3)
  }

  funcdvide() {
    this.sum.set(this.func())
    this.num.set(0)
    this.action.set(4)
  }
  addInput(add: number) {
    
    this.num.set(this.num() * 10 + add)
  }
  addPoint() {
    this.num.set(this.num() * 100)
  }
}







