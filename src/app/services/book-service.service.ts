import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BookModel } from '../model/BookModel';
import { Book } from "../model/Book";
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BookServiceService {


  constructor(private http: HttpClient) { }

  listBooks: BookModel[];

  baseUrl: string = "https://localhost:44317/api/ProjectCompare/book";
  baseUrlPaging: string = "https://localhost:44317/api/ProjectCompare/book?pageSize=2&pageNumber=1";
  
  GetBook(pageSize?: number, pageNumber?: number): Observable<BookModel> {
    let result: any;
    if (pageSize !== undefined && pageNumber !== undefined) {
      const urlPaging = `https://localhost:44317/api/ProjectCompare/book?pageSize=${pageSize}&pageNumber=${pageNumber}`
      result = this.http.get(urlPaging);
      return result;
    } else {
      result = this.http.get(this.baseUrlPaging);
      return result
    }
  }

  CreateBook(book: Book) : Observable<any> {
    const headers = { 'Content-Type': 'application/json' }; // ... Set content type to JSON

    return this.http.post(this.baseUrl, JSON.stringify(book), {'headers': headers});
  }
  
}
