import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { Exercicio1 } from './exercicio-1/exercicio-1';

@Component({
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exercicios-angular');
}
