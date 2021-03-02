import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count = 0;
  function(){
    this.count = this.count+1
  }
  function1(){
    this.count = this.count-1
  }
}

// function myFunction(){
// console.log('button clicked') 
// }
// myFunction();