import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent {
  @Output() newItem = new EventEmitter<string>();

  clearfield() {
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
  }

  handlerAdd(event: string) {
    event === '' ? null : this.newItem.emit(event);
    this.clearfield();
  }
}
