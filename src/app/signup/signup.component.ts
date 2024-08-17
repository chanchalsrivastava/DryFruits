
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  responseData: any;
  signupForm ! : FormGroup;

  constructor(private api:ApiService , private fb: FormBuilder,private router:Router) {}
  showPwd:any;
  email: string = '';
  password: string = '';
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  passwordToggle()
  {
   this.showPwd=!this.showPwd;
  }
  signup() {
    if (this.signupForm.valid) {
      const data = this.signupForm.value;

    
   
    this.router.navigate(['/home']);
  }else {
    alert('Invalid credentials');

    
  }
}
}
