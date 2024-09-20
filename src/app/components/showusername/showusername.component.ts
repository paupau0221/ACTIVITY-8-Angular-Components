// @ts-ignore

import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {
  showusername: string = '';
  displayedUsername: string = '';
  // @ts-ignore
  displayedUsername: string;

  displayUsername() {
    this.displayedUsername = this.showusername;
}
}
