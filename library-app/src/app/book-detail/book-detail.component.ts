import { Component, Input } from '@angular/core';
import { IBookDetails } from '../interfaces/book-details.interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  @Input() book: IBookDetails | null = null;
}
