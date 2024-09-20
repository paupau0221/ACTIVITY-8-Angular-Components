import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css'
})
export class FahrenheittocelsiusComponent {
  fahrenheit: number = 0;
  // @ts-ignore
  fahrenheittocelsius: number = null;
  // @ts-ignore
  fahrenheittocelsius: number;
  // @ts-ignore
  fahrenheittocelsius: number;

  convertToCelsius() {
    this.fahrenheittocelsius = ((this.fahrenheit - 32) * 5) / 9;
  }
}
