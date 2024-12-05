import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'champion-show';
}
