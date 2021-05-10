import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ListbookComponent } from './listbook/listbook.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule,  } from '@progress/kendo-angular-grid';
import { SliderModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { Routes, RouterModule } from '@angular/router';
import { PagerModule } from '@progress/kendo-angular-pager';


const routes: Routes = [
  { path: 'addbook', component: CreateBookComponent },
];
@NgModule({
    declarations: [									     
        ListbookComponent,
        CreateBookComponent,
        UpdateBookComponent,
     ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ButtonsModule,
      GridModule,
      PagerModule,
      SliderModule ,
      FormsModule,
      ReactiveFormsModule,
      InputsModule,
      LabelModule,
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      PagerModule,
    ],
    exports: [
        ListbookComponent,
        CreateBookComponent,
        UpdateBookComponent,
        RouterModule,
    ],
    
    providers: [],
    bootstrap: []
  })
  export class BookModule { }