import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloAcademyComponent } from './hello-academy/hello-academy.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HelloAcademyComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <app-hello-academy></app-hello-academy>
  `,
})
export class App {
  name = 'Brandon';
}

bootstrapApplication(App);
