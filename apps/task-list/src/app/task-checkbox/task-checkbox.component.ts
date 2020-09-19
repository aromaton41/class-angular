import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-checkbox',
  templateUrl: './task-checkbox.component.html',
  styleUrls: ['./task-checkbox.component.css'],
})
export class TaskCheckboxComponent {

  @Output() check = new EventEmitter<boolean>();
  @Input() checked

  updateTask(event) {
    const check= event.target.checked
    this.check.emit(check);
  }
}
