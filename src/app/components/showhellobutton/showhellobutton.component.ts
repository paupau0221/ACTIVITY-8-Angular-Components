import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {
  showhellobutton: string = '';

  displayHello() {
    this.showhellobutton = 'Hello World';
  }
}
