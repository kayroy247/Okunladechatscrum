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
  userTypes = ['regular user', 'project owner'];
  scrumUserModel = new Scrumuser('Kayode Okunlade', 'okunladekayode@gmail.com', 'okunlade$4', 'regular user', 'politico');

onSubmit(){
  console.log(this.scrumUserModel);
  this._ScrumdataService.signup(this.scrumUserModel).subscribe(
    data => console.log('Success', data),
    error => console.error('Error', error)
  )
}

}
