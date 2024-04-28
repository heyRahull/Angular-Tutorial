import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: '<p>Warning!</p>',
  styles: [
    `
      p {
        padding: 5px;
        margin: 5px;
        border: 5px solid yellow;
        width: 50%;
        background-color: rgb(248, 248, 198);
      }
    `,
  ],
})
export class WarningComponent {}
