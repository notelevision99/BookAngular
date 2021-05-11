import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { PageSizeChangeEvent } from '@progress/kendo-angular-pager';
import { BookModel } from 'src/app/model/BookModel';
import { PagingModel } from 'src/app/model/PagingModel';
import { BookServiceService } from '../../services/book-service.service';


@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent implements OnInit {

  bookModel: BookModel;
  books: any;
  pagingModel: PagingModel = new PagingModel();
  gridView: GridDataResult;
  idUpDel: string;
  searchString: string;

  // dialog field 
  isActive = false;


  public searchForm: FormGroup = new FormGroup({
    searchString: new FormControl('')
  })
  constructor(public service: BookServiceService) { }

  ngOnInit() {
    this.loadBooks();
  }

  onPageChange(e: PageChangeEvent) {
    this.pagingModel.skip = e.skip;
    this.pagingModel.pageSize = e.take;
    this.pagingModel.currentPage = Math.ceil((this.pagingModel.skip / this.pagingModel.pageSize) + 1)
    this.loadBooks();
  }

  onPageSizeChange(e: PageSizeChangeEvent) {
    this.pagingModel.pageSize = Number(e.newPageSize);
    this.loadBooks();
  }

  editHandler({ dataItem }) {
    this.idUpDel = dataItem.bookId
  }

  removeHandler({ dataItem }) {
    this.idUpDel = dataItem.bookId
  }

  onEditBook() {
    this.isActive = true;

  }

  onDeleteBook() {
    this.service.DeleteBook(this.idUpDel).subscribe(res => {
      this.loadBooks();
    });
  }

  onSearch() {
    this.searchString = this.searchForm.controls['searchString'].value;
    this.loadBooks(this.searchString);
  }

  private loadBooks(searchString?: string) {
    var getBookCallback = (this.pagingModel.skip === 0 && this.pagingModel.pageSize == 2 && searchString != null) ? this.service.GetBook() : this.service.GetBook(this.pagingModel.pageSize, this.pagingModel.currentPage, searchString);
    getBookCallback.subscribe((book: BookModel) => {
      this.bookModel = book;
      this.pagingModel.totalCount = this.bookModel.totalCount
      this.books = this.bookModel.books
      this.gridView = this.books;
    });
  }
}
