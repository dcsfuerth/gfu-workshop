import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { CalculatorComponent } from '../../shared/calculator/calculator.component';
import { BookFilterPipe } from '../book-filter.pipe';
import {
  RatingComponent,
  UserVoting,
} from '../../shared/rating/rating.component';
import { BookDataService } from '../book-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'books-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  imports: [
    CommonModule,
    FormsModule,
    CalculatorComponent,
    BookFilterPipe,
    RatingComponent,
    HttpClientModule,
  ],
})
export class BookListComponent {
  coverIsVisible = true;

  books: Book[] = [];

  suchbegriff: string = '';

  subscription: any = null;

  // private bookDataService: BookDataService;

  // constructor(@Inject(BookDataService) bookDataService: BookDataService) {
  //   this.bookDataService = bookDataService;
  // }

  constructor(private bookDataService: BookDataService) {}

  async ngOnInit() {
    // this.books = this.bookDataService.getBooks();

    this.subscription = this.bookDataService
      .getBooksNeu()
      .subscribe((books) => {
        this.books = books;
      });

    //

    this.books = await this.bookDataService.getBooksNeu2();

    /// ...

    this.bookDataService.getBooksNeu2().then((books) => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  trackByFn(index: number, book: any) {
    return book.isbn;
  }

  toggleCover() {
    //    this.bookDataService.

    console.log('toggleCover');
    this.coverIsVisible = !this.coverIsVisible;
  }

  userClickedPlus($event: string) {
    console.log('userClickedPlus', $event);

    const buch = this.books.find((book) => book.isbn === $event);
    if (buch) {
      buch.rating = this.runde(Math.min(5, buch.rating + 0.1));
    }
  }

  userClickedMinus($event: string) {
    const buch = this.books.find((book) => book.isbn === $event);
    if (buch) {
      buch.rating = this.runde(Math.max(1, buch.rating - 0.1));
    }
  }

  private runde(x: number) {
    return +x.toFixed(1);
  }

  userVoted(vote: UserVoting) {
    if (vote.isPlus) {
      this.userClickedPlus(vote.id);
    } else {
      this.userClickedMinus(vote.id);
    }
  }
}
