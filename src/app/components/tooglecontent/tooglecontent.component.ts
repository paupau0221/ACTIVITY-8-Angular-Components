import { Component } from '@angular/core';

@Component({
  selector: 'app-tooglecontent',
  templateUrl: './tooglecontent.component.html',
  styleUrl: './tooglecontent.component.css'
})
export class TooglecontentComponent {
  showContents = false;

  toggleContent() {
    this.showContents = !this.showContents;
  }
}
