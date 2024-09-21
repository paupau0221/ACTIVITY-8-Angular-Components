import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent {
  progressbar = 0;

  increaseProgress() {
    if (this.progressbar < 100) {
      this.progressbar += 10;
    }
  }
}
