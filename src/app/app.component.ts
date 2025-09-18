import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
  styles: ['.row{display: flex; justify-content: space-between; margin-bottom: 16px}']
})
export class AppComponent {
  title = 'my-first-app';
}
