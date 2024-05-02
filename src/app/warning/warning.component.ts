import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  standalone: true,
  imports: [],
  template: ` <p>warning!</p> `,
  styles: `
  p {
    margin: 5px;
    padding: 5px;
    border: 5px solid yellow;
    width: 50%;
    background-color: rgb(248,248,198);
  }
  `,
})
export class WarningComponent {}
