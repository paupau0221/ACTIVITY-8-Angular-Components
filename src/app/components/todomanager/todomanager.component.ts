import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  newTask: string = '';
  todomanager: string[] = [];

  addTask() {
    if (this.newTask) {
      this.todomanager.push(this.newTask);
      this.newTask = ''; // Clear input field
    }
  }

  removeTask(index: number) {
    this.todomanager.splice(index, 1);
  }
}
