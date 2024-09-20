import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  inputValue: number = 0;
  // @ts-ignore
  currencyconverter: number = null;
  // @ts-ignore
  currencyconverter: number;

  convertCurrency() {
    this.currencyconverter = this.inputValue * 56; // 1 dollar = 56 Php
  }
}
