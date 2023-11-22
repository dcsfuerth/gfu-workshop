import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private httpClient: HttpClient) {}

  getBooks(): Book[] {
    return [
      {
        isbn: '12345',
        title: 'Angular 16!',
        price: 10,
        rating: 4.5,
        coverUrl:
          'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
      },
      {
        isbn: '12346',
        title: 'Angular 17!',
        price: 21,
        rating: 4.7,
        coverUrl:
          'https://m.media-amazon.com/images/I/6180XKTXLVL._AC_UY218_.jpg',
      },
    ];
  }

  getBooksNeu(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:3000/books');
  }

  async getBooksNeu2() {
    return await firstValueFrom(this.getBooksNeu());
  }
}
