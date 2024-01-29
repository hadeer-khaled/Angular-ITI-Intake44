import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  isChecked: boolean = false;
  @Input() task: any;
  // to send data to parent
  @Output() SendDeletedTaskToParent = new EventEmitter();

  DeleteTask() {
    console.log('Deleted Task From Child', this.task);
    this.SendDeletedTaskToParent.emit(this.task);
  }
}
