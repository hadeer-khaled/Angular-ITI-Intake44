import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css',
})
export class ToDoFormComponent {
  inputValue: string = '';
  // to send data to parent
  @Output() SendDataToParentEvent = new EventEmitter();

  AddTask() {
    console.log('Input Task From Child:', this.inputValue);
    this.SendDataToParentEvent.emit(this.inputValue);
    this.inputValue = '';
  }
}
