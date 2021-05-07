import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BookModel } from '../model/BookModel';
import { Book } from "../model/Book";
import { Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BookServiceService {

 
constructor(private http : HttpClient) {}

 listBooks : BookModel[]  ;
 baseUrl : string = "https://localhost:44317/api/ProjectCompare/book?pageSize=2&pageNumber=1";
 GetBook() {
  let result = this.http.get(this.baseUrl)
  .toPromise()
  return result;
  
}


}
