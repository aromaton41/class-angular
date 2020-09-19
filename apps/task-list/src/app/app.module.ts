import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskCheckboxComponent } from './task-checkbox/task-checkbox.component';

import { TaskService } from '../app/task.service';
import { TabButtonComponent } from './ui/tab-button/tab-button.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskAddComponent,
    TaskCheckboxComponent,
    TabButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
