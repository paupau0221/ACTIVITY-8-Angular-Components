import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',

  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = '';
  email: string = '';
  simplelogin: any = null;

  onSubmit() {
    this.simplelogin = {
      name: this.name,
      email: this.email
    };
  }
}
