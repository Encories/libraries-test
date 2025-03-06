import { Component, Input } from '@angular/core';
import { IBookDetails } from '../interfaces/book-details.interface';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.scss']
})
export class LibraryDetailComponent {
  @Input() book: IBookDetails | null = null;
}
