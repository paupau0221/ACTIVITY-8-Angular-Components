import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-usegreeting',
  templateUrl: './usegreeting.component.html',
  styleUrl: './usegreeting.component.css'
})
export class UsegreetingComponent {
  userName: string = '';
  usergreeting: string = '';

  greetUser() {
    this.usergreeting = this.userName;
  }
}
