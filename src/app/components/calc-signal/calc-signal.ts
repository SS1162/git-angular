import { Component, signal, Signal,computed, WritableSignal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calacurtor',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './calacurtor.html',
  styleUrl: './calacurtor.scss'
})
export class CalcSignal {
  num:WritableSignal<number>=signal(0)
  sum: WritableSignal<number>=signal(0)
  action: WritableSignal<number>=signal(0)

  funcPlus() {
  
    this.action.set(1) 
  }

  funcminus() {
    
    this.action.set(2) 
  }

  funcmult() {
    
   this.action.set(3) 
  }

  funcdvide() {
   this.action.set(4) 
  }
addInput(add:number){
 this.num.set(this.num()*10+add)
}
addPoint(){
   this.num.set(this.num()*100)
}

  resulte() {
    if (this.action() === 1) {
this.sum.set(this.sum() + this.num()) 
    }
    else if (this.action() === 2) {
this.sum.set(this.sum() - this.num())
    }
    else if (this.action() === 3) {
this.sum.set(this.sum() * this.num())
    }
    else if (this.action() === 4) {
this.sum.set(this.sum() + this.num())
    }
    this.num = this.sum
  }
}







