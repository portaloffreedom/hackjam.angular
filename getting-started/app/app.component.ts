import { Component } from '@angular/core';

export class Book {
  title: String;
  cover: String;
  category: String;
}


@Component({
  selector: 'bookstore',
  // template: ``,
  templateUrl: '../app/app.template.html'
})

export class AppComponent {
  books: Book [] = mockBooks;
  navClosed: Boolean = true;

  clicked() {
    console.log('has been clicked');
  }

  search(){}

  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}
