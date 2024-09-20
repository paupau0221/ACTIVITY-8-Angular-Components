import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputString: string = '';
  textlength: null = null;

  calculateLength() {
    // @ts-ignore
    this.textlength = this.inputString.length;
  }
}
