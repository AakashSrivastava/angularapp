import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTableModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([])
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }