import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuccessComponent, WarningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-project';
  name = 'The Humble Coder';
  count = 3;
}
