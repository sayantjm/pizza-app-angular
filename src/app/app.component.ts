import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAGhm9UyykY5xYUTM6puodu1Vix06xi7qM",
      authDomain: "ng-pizza-shop.firebaseapp.com"
    });
  }
}
