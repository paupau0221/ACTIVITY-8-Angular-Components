import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',

  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = '';
  email: string = '';
  simpleform: any = null;

  onSubmit() {
    this.simpleformc = {
      name: this.name,
      email: this.email
    };
  }
}
