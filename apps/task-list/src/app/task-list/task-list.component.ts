import { Component } from '@angular/core';
import { fillterButtonType, Itask } from '../model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  //taskservice
  tasks: Itask[];
  fillterButtonType: fillterButtonType[] = ['ALL', 'DONE', 'UNDONE'];
  private fillter

  constructor(private taskservice: TaskService) {
    //this.taskservice = taskservice
    this.tasks = this.taskservice.getTasks();
    this.doFilter('ALL');
  }

  newTask(event: string) {
    this.taskservice.addTask({
      title: event,
      done: false,
    });
    this.doFilter(this.fillter)
  }

  updateTask(event: string) {
    this.taskservice.updateTask(event);
    this.doFilter(this.fillter)
  }

  afterfillter(){
    this.tasks = this.taskservice.getTasks();
  }

  doFilter(event: string) {
    this.afterfillter();
    this.fillter = event
    this.tasks = this.tasks.filter(el => {
      if(event==='ALL'){
        return this.tasks
      }else if(event === 'DONE'){
        return el.done
      }else if(event === 'UNDONE'){
        return !el.done
      }
    });
  }
}
