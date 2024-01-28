import { Component } from '@angular/core';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-app-container',
  standalone: true,
  imports: [ToDoListComponent],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css',
})
export class AppContainerComponent {}
