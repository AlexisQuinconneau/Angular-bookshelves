import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDGJnXMGFbKCmSs497ckCjj1bLfQVl--Ls",
      authDomain: "bookshelves-55025.firebaseapp.com",
      databaseURL: "https://bookshelves-55025.firebaseio.com",
      projectId: "bookshelves-55025",
      storageBucket: "bookshelves-55025.appspot.com",
      messagingSenderId: "875440026535",
      appId: "1:875440026535:web:5e04a9a9eb30f9b3ba3c82"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
