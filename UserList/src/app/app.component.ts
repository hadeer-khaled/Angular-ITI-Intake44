import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListContainerComponent } from './users-list-container/users-list-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UserList';
}
