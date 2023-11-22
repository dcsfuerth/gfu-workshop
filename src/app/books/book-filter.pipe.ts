import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
  standalone: true,
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], suchwert: string): Book[] {
    if (!suchwert) {
      return books;
    }

    const filterWert = suchwert.toLowerCase();

    const result = books.filter((book: Book) => {
      const title = book.title.toLowerCase();
      return title.includes(filterWert);
    });

    return result;
  }
}
