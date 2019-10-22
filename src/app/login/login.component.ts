import { Component, OnInit } from '@angular/core';
import { ScrumdataService } from '../scrumdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
scrumUserLoginData = {};
  constructor(private _scrumdataService: ScrumdataService, private _router: Router) { }
feedback = ""
  ngOnInit() {
  }
  onLoginSubmit(){
    console.log(this.scrumUserLoginData);
    
    this._scrumdataService.login(this.scrumUserLoginData).subscribe(
      data => {
         console.log('Success', data);
         localStorage.setItem('token', data.token);
         this._router.navigate(['/scrumboard'])
      },
      error =>{ console.error('Error', error);
      this.feedback = "Invalid Login Credentials"
    }
    )
  }
}
