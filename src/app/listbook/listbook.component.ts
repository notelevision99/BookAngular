import { Component, OnInit } from '@angular/core';
import { BookModel } from '../model/BookModel';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
   
  
  constructor(public service : BookServiceService) {
    
  }
  bookModel : any;
  books : any;
  async ngOnInit() {
   this.bookModel = await this.service.GetBook()
   this.books = this.bookModel.books
  

  }

}
