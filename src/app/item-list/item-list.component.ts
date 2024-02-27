import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  // toggleStrikeThrough(arg0: any) {
  //   throw new Error('Method not implemented.');
  // }
  // @Input() todo: any;
  // strikeThrough: any;

  showModal = false;

  openModal(): void {
    this.showModal = true;
  }
  todoItems: any[] = [];
  todo = {
    title: 'Your todo title',
    description: 'Your todo description',
  };

  constructor() {
    // Contoh pengisian data pada todoItems, Anda bisa mengisinya dengan data yang sesuai
    this.todoItems = [
      { title: 'Todo 1', description: 'Description 1' },
      { title: 'Todo 2', description: 'Description 2' },
      { title: 'Todo 2', description: 'Description 2' },
      { title: 'Todo 2', description: 'Description 2' },
      { title: 'Todo 2', description: 'Description 2' },
      // Tambahkan data todo lainnya jika diperlukan
    ];
  }
  strikeThrough = false;

  toggleStrikeThrough(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.strikeThrough = event.target.checked;
    }
  }
}
