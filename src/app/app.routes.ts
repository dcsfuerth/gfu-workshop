import { Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:isbn', component: BookDetailComponent },
];
