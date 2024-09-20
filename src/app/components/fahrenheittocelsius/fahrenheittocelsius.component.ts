import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css'
})
export class FahrenheittocelsiusComponent {
  fahrenheit: number = 0;
  // @ts-ignore
  celsiusValue: number = null;
  // @ts-ignore
  celsiusValue: number;
  // @ts-ignore
  celsiusValue: number;

  convertToCelsius() {
    this.celsiusValue = ((this.fahrenheit - 32) * 5) / 9;
  }
}
