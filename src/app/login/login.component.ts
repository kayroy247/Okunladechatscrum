import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrumUserModel = {
    email: 'okunlade@gmail.com', 
    password: 'todolist',
    projname: 'dladjaf'
  }
}
