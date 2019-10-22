import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';
import { ScrumdataService } from '../scrumdata.service'

@Component({
  selector: '.app-signup',
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private _ScrumdataService: ScrumdataService) { }

  ngOnInit() {
  }
  userTypes = ['regular user', 'Owner'];
  scrumUserModel = new Scrumuser('', '', '', '', 'seeker');
  feedback ='';
onSubmit(){
  console.log(this.scrumUserModel);
  this._ScrumdataService.signup(this.scrumUserModel).subscribe(
    data => {
      console.log('Success', data);
      this.feedback = 'Account Created Successfully'
    },
    error => { 
      console.error('Error', error);
      this.feedback = 'Signup Failed'
    }


  )
}

}
