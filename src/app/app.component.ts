import {Component, Injectable} from '@angular/core';
import {Sort} from '@angular/material';
import { Router,NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import {  HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

var apiUrl : string = `https://localhost:44395/api/values/`;
var location : string;
@Component({
   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css']
})
export class AppComponent { 
dataSource : any;
   displayedColumns: string[] = ['CustomerName', 'Email', 'PhoneNo', 'CompanyName','Location'];
   public location : string;
   constructor(private _http : HttpClient, private activatedRoute : ActivatedRoute)
   { }

   GetData(loc)
   {
      debugger
      console.log(loc);
      this._http.get(apiUrl + 'Mumbai').subscribe(data =>{
         console.log(data);
         this.dataSource = data;
      });

   }


   ngOnInit()
   {
      
      // this.location = this.activatedRoute.snapshot.paramMap.get("location")

        this.GetData(this.location);
   }
}

