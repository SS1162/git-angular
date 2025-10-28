import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wellcome } from './components/wellcome/wellcome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Wellcome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson_1');
}
