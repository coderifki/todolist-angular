import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css',
})
export class CreateTodoComponent {
  showModal = false;
  newTodo = {
    title: '',
    description: '',
  };

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  createTodo(): void {
    // Lakukan logika untuk membuat todo baru
    console.log('Creating todo:', this.newTodo);
    // Reset form
    this.newTodo = { title: '', description: '' };
    // Tutup modal
    this.closeModal();
  }
}
