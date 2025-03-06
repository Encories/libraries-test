import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  public searchBooks(searchTerm: string): Observable<any> {
    return this.http.get<any>(`https://openlibrary.org/search.json?author=${searchTerm}&sort=new`);
  }

}
