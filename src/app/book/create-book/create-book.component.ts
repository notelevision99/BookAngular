import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookServiceService } from 'src/app/services/book-service.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  public book = new Book();
  @Input() isActive = false;
  
  constructor(private router: Router,
    public service: BookServiceService
  ) { }
  
  public close() {
    this.isActive = false;
  }

  public editForm: FormGroup = new FormGroup({
    ProductID: new FormControl(),
    ProductName: new FormControl('', Validators.required),
    UnitPrice: new FormControl(0),
    UnitsInStock: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
    Discontinued: new FormControl(false)
  });
  
  ngOnInit() {
  }
  public registerForm: FormGroup = new FormGroup({
    bookName: new FormControl(),
    bookType: new FormControl(),
    description: new FormControl()
  });

   submitForm() {
    const navigationToHome: string[] = ['/book'];
    this.book = Object.assign({},this.registerForm.value)
    this.service.CreateBook(this.book).subscribe();
    this.router.navigate(navigationToHome);
    this.service.GetBook();
    
  }
}
