import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookServiceService } from 'src/app/services/book-service.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  constructor(private router: Router,
    public service : BookServiceService
  ) { }

  ngOnInit() {
  }
  public registerForm: FormGroup = new FormGroup({
    bookName: new FormControl(),
    bookType: new FormControl(),
    description: new FormControl()
  });
  public book = new Book();
   submitForm() {
    const navigationToHome: string[] = ['/book'];
    this.book = Object.assign({},this.registerForm.value)
    this.service.CreateBook(this.book).subscribe();
    this.router.navigate(navigationToHome);
    this.service.GetBook();
    
  }
}
