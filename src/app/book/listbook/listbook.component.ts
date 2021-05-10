import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { BookModel } from 'src/app/model/BookModel';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent implements OnInit {

  bookModel: BookModel;
  books: any;
  selectedTotalRecord = 0;
  totalPage = 0;
  totalCount = 0;
  skip = 0;
  pageSize = 2;

  gridView: GridDataResult;

  constructor(public service: BookServiceService) {

  }

  ngOnInit() {
    this.loadBooks();
  }

  onPageChange(page: PageChangeEvent) {
    this.skip = page.skip 
    this.loadBooks();
  }

  loadBooks() {
    var getBookCallback = (this.skip === 0) ? this.service.GetBook() : this.service.GetBook(this.pageSize, this.skip);
    getBookCallback.subscribe((book: BookModel) => {
      this.bookModel = book;
      this.totalCount = this.bookModel.totalCount
      console.log(this.totalPage)
      
      this.books = this.bookModel.books
      this.gridView = this.books;
    });


    // if (this.skip === 0) {
    //   this.service.GetBook().subscribe((book: BookModel) => {
    //     this.bookModel = book;
    //     this.totalPage = this.bookModel.totalPage;
    //     console.log(this.bookModel.totalPage)
    //     this.books = this.bookModel.books
    //     this.gridView = this.books;
    //   });
    // }
    // else {
    //   this.service.GetBook(this.pageSize, this.skip).subscribe((book: BookModel) => {
    //     this.bookModel = book;
    //     console.log(this.bookModel.totalPage)
    //     this.totalPage = this.bookModel.totalPage;
    //     this.books = this.bookModel.books
    //     this.gridView = this.books;
    //     console.log("skip ", this.skip)
    //     console.log("skip change")
    //   });
    // }
  }
  onClick() {

  }
}
