import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {


  @Output() onCheck = new EventEmitter<boolean>();
  @Input() task;

@HostBinding('class.done')  
get done(){
  return this.task.done;
}
  

updateTask(event:boolean) {
    this.task.done = event;
    this.onCheck.emit({
      ...this.task, done:event
    });
  }

  // findID(id){
  //   console.log(id)
  // }
}


// status = $event