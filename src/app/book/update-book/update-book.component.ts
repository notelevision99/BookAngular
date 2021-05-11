import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  book : Book = new Book();
  idToUpdate : string ;
  //field set dialog
  @Input() isActiveDialogUpdate = false;
  constructor(
    public service : BookServiceService,
    private route : ActivatedRoute,
    private router : Router
    ){}
  ngOnInit() {
      this.loadBook();
  }
  openDialog(){
    this.isActiveDialogUpdate = true
  }
  closeDiaglog(){
    this.isActiveDialogUpdate = false
  }
  editForm: FormGroup = new FormGroup({
    bookId : new FormControl(),
    bookName: new FormControl(),
    bookType: new FormControl(),
    description: new FormControl()
  });
  loadBook(){
    this.idToUpdate = this.route.snapshot.paramMap.get('id');
    this.service.GetBookById(this.idToUpdate).subscribe((res : Book) => {
      this.book = res  
    })  
  } 
  
  onEdit(){
    const navigationToHome: string[] = ['/book'];   
    this.service.EditBook(this.idToUpdate,this.book).subscribe();
    this.router.navigate(navigationToHome);
    this.service.GetBook();
    
  }
}
