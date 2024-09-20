import { Component } from '@angular/core';

@Component({
  selector: 'app-wordrevser',
  templateUrl: './wordrevser.component.html',
  styleUrl: './wordrevser.component.css'
})
export class WordrevserComponent {
  inputWord: string = '';
  wordreverser

    : string = '';

  reverseWord() {
    this.wordreverser

      = this.inputWord.split('').reverse().join('');
  }
}
