import { Component } from '@angular/core';
import { IBookDetails } from '../interfaces/book-details.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent {

  public searchTerm: string = '';
  public books: IBookDetails[] = [];
  public displayedColumns: string[] = ['title', 'year', 'count'];
  public selectedBook: IBookDetails | null = null;

  constructor(
    private apiService: ApiService
  ) {}

  public searchBooks(): void {
    this.apiService.searchBooks(this.searchTerm).subscribe((data) => {
      this.books = data.docs;
    });
  }

  public onRowClick(book: IBookDetails): void {
    this.selectedBook = book;
  }

}
