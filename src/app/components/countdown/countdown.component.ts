import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
  timeLet = 10;
  interva: any;

  startCountdown() {
    if (this.interva) {
      clearInterval(this.interva);
    }
    this.interva = setInterval(() => {
      if (this.timeLet > 0) {
        this.timeLet--;
      } else {
        clearInterval(this.interva);
      }
    }, 1000);
  }
}
