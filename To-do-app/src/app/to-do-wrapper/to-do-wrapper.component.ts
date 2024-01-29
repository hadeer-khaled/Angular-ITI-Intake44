import { Component } from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css',
})
export class ToDoWrapperComponent {
  tasksList: Array<string> = [];
  ReceiveDataFromChild(task: string) {
    console.log('Input Task From Parent', task);
    this.tasksList.push(task);
    console.log(this.tasksList);
  }

  ReceiveDeletedTaskFromChild(deletedTask: string) {
    console.log('Deleted Task From Parent', deletedTask);
    this.tasksList = this.tasksList.filter(
      (taskItem: any) => taskItem !== deletedTask
    );
  }
}
