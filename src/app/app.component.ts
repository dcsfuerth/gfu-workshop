import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { CalculatorComponent } from './shared/calculator/calculator.component';

@Component({
  selector: 'books-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, BookListComponent, CalculatorComponent],
})
export class AppComponent {
  title = 'books';
}
