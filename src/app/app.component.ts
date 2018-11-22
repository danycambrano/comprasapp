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
    apiKey: 'AIzaSyC3eMCNtYY1M30t4XmK6d5hKFQf2GDU7hA',
    authDomain: 'comprasapp-14339.firebaseapp.com'
  });
}
}
