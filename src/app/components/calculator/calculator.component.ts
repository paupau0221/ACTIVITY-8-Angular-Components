import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  // @ts-ignore
  calculator: number = null;
  // @ts-ignore
  calculator: number;
  // @ts-ignore
  calculator: number | undefined;

  add() {
    this.calculator = this.num1 + this.num2;
  }

  subtract() {
    this.calculator = this.num1 - this.num2;
  }

  multiply() {
    this.calculator = this.num1 * this.num2;
  }

  divide() {
    // @ts-ignore
    this.result = this.num2 !== 0 ? this.num1 / this.num2 : 'Infinity';
  }
}
