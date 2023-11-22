import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'books-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit, OnChanges, OnDestroy {
  x: number = 0;
  y: number = 0;
  result: number = 0;

  constructor() {
    console.log('constructor');
  }

  // <books-calculator x='32' y='12'></books-calculator>

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  add() {
    this.result = +this.x + +this.y;
  }
  minus() {
    this.result = +this.x - +this.y;
  }
  clear() {
    this.x = 0;
    this.y = 0;
    this.result = 0;
  }
}
