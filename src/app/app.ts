import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wellcome } from './components/wellcome/wellcome';
import { Calacurtor } from './components/calacurtor/calacurtor';
import { CalcSignal } from './components/calc-signal/calc-signal';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Wellcome,Calacurtor,CalcSignal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson_1');
}
