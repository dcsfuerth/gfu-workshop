import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'books-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  coverIsVisible = true;

  public books = [
    {
      isbn: '12345',
      title: 'Angular 16',
      price: 10,
      rating: 4.5,
      coverUrl:
        'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
    },
    {
      isbn: '12346',
      title: 'Angular 17',
      price: 21,
      rating: 4.7,
      coverUrl:
        'https://m.media-amazon.com/images/I/6180XKTXLVL._AC_UY218_.jpg',
    },
  ];

  suchbegriff: string = '';

  trackByFn(index: number, book: any) {
    return book.isbn;
  }

  toggleCover() {
    console.log('toggleCover');
    this.coverIsVisible = !this.coverIsVisible;
  }
}
