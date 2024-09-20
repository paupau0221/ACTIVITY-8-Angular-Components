import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number = 0;
  multiplicationtable: number[] = [];

  generateTable() {
    this.multiplicationtable = [];
    for (let i = 1; i <= 10; i++) {
      this.multiplicationtable.push(i);
    }
  }
}
