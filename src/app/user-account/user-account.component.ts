import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModule } from './user-account.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  accountDetails!: FormGroup;
  usermodelObj: UserModule = new UserModule();
  data: any;
  constructor(private formBuilder: FormBuilder , private api:ApiService ){}
  ngOnInit(): void {


    this.accountDetails = this.formBuilder.group({
      username:[],
      firstname:[],
      lastname:[],
      organization:[],
      location:[],
      email:[],
      phone:[],
      birthday:[]
    })
    
  

}
submit()
{
  this.usermodelObj.username = this.accountDetails.value.username;
  this.usermodelObj.firstname = this.accountDetails.value.firstname;
  this.usermodelObj.lastname = this.accountDetails.value.lastname;
  this.usermodelObj.organization = this.accountDetails.value.organization;
  this.usermodelObj.location = this.accountDetails.value.location;
  this.usermodelObj.email = this.accountDetails.value.email;
  this.usermodelObj.phone = this.accountDetails.value.phone;
  this.usermodelObj.birthday = this.accountDetails.value.birthday;
  
  
    this.data.push(this.accountDetails.value)

    console.log(this.accountDetails.value);
  

}
}
