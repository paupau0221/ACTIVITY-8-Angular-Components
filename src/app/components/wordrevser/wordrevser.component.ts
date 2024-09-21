import { Component } from '@angular/core';

@Component({
  selector: 'app-wordrevser',
  templateUrl: './wordrevser.component.html',
  styleUrl: './wordrevser.component.css'
})
export class WordrevserComponent {
  inputWord: string = '';
  wordshuffler

    : string = '';

  reverseWord() {
    this.wordshuffler

      = this.inputWord.split('').reverse().join('');
  }
}
