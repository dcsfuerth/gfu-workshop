import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'books-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  x: number = 0;
  y: number = 0;
  result: number = 0;

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
