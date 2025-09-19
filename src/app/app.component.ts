import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // styles: `.row{
  // display: flex; 
  // justify-content: space-between; 
  // margin-bottom: 16px
  // }
  // .header-text {
  //   font-weight: 700;
  //   font-size: 30px;
  //   line-height: 36px;
  //   color: #0F172A;
  //   text-align: center;
  // }
  // .gradient-line {
  //   width: 96px;
  //   height: 4px;
  //   border-radius: 9999px;
  //   border: 1px solid #E5E7EB;
  //   background-image: linear-gradient(to right, #3B82F6, #9333EA);
  //   display: flex;
  //   justify-content: center;
  //   }`
})
export class AppComponent {
  title = 'my-first-app';
}
