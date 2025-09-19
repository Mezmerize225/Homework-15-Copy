import { Component, input } from '@angular/core';
import { buttonColor } from './models/button-color-model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public buttonColorType = input<buttonColor>('primary');
  public isLoading = input<boolean>();
}


