import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number = 0;
  currency: string = 'USD';
  formattedAmount: string = '';

  formatCurrency() {
    switch (this.currency) {
      case 'USD':
        this.formattedAmount = `$${this.amount.toFixed(2)}`;
        break;
      case 'PHP':
        this.formattedAmount = `₱${this.amount.toFixed(2)}`;
        break;
      case 'EUR':
        const euroAmount = this.convertToEuro(this.amount);
        this.formattedAmount = `€${euroAmount.toFixed(2)}`;
        break;
      default:
        this.formattedAmount = this.amount.toString();
    }
  }

  convertToEuro(amount: number): number {
    const conversionRate = 0.85; // Example conversion rate from USD to Euro
    return amount * conversionRate;
  }
}
