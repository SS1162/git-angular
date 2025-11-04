import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calacurtor',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './calacurtor.html',
  styleUrl: './calacurtor.scss'
})
export class Calacurtor {
  num: number = 0;
  sum: number = 0;
  action: number = 0

  funcPlus() {
this.sum=this.num
    this.num = 0
    this.action = 1
  }

  funcminus() {
    this.sum=this.num
    this.num = 0
    this.action = 2
  }

  funcmult() {
    this.sum=this.num
    this.num = 0
    this.action = 3
  }

  funcdvide() {
    this.sum=this.num
    this.num = 0
    this.action = 4
  }
addInput(add:number){
 this.num= this.num*10+add
}
addPoint(){
  this.num= this.num*100
}
  resulte() {
    if (this.action === 1) {
this.sum = this.sum + this.num
    }
    else if (this.action === 2) {
this.sum = this.sum - this.num
    }
    else if (this.action === 3) {
 this.sum = this.sum * this.num
    }
    else if (this.action === 4) {
 this.sum = this.sum / this.num
    }
    this.num = this.sum
  }
}