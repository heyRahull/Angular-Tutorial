import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: '<h1>Hello World</h1>',
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class HelloComponent {}
