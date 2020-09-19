import { Itask } from '../app/model';
export class TaskService {
  private tasks: Itask[] = [
    { id: 1, title: 'test01', done: false },
    { id: 2, title: 'test02', done: false },
  ];

  ß;
  getTasks() {
    return this.tasks.slice();
  }

  addTask(task) {
    this.tasks.push({
      id: this.tasks.length + 1,...task
    });
  }

  updateTask(task) {
    const findIndexTask = this.tasks.findIndex((el) => el.id === task.id);

    this.tasks[findIndexTask] = task;
  }

  removeTask(task){
    
  }
}
