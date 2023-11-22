import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent {
  @Input()
  stars: number = 0;

  @Input()
  id: string = '-';

  @Output()
  plus: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  minus: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  vote: EventEmitter<UserVoting> = new EventEmitter<UserVoting>();

  clickedPlus() {
    this.plus.emit(this.id);

    this.vote.emit({
      id: this.id,
      isPlus: true,
    });
  }
  clickedMinus() {
    this.minus.emit(this.id);

    this.vote.emit({
      id: this.id,
      isPlus: false,
    });
  }
}

export class UserVoting {
  id: string = '';
  isPlus: boolean = false;
}
