import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To-do-app';
}
