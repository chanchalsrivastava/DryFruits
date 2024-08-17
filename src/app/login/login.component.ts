import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPwd:any;
  email: string = '';
  password: string = '';

  constructor(private router: Router) {} 
   passwordToggle()
   {
    this.showPwd=!this.showPwd;
   }
   login() {
 
    if (this.email === "user@gmail.com"  && this.password === "password" ) {
      

      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
