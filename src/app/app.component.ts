import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'lab6_demo';
  isAuthUser = localStorage.getItem('username') ? true : false;
  

  ngOnInit(): void {
    console.log(this.isAuthUser)
  }

  logout(){
    localStorage.clear();
  }
}
