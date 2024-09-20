import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',

  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  birthYear: number = 0;
  // @ts-ignore
  userage: number = null;

  calculateAge() {
    const currentYear = new Date().getFullYear();
    this.userage = currentYear - this.birthYear;
  }
}
