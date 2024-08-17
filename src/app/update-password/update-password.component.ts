import { Component } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
   cshowPwd:any;
   nshowPwd:any;
   confirmshowPwd:any;
   cpasswordToggle()
   {
    this.cshowPwd=!this.cshowPwd;
   }
   
   npasswordToggle()
   {
    this.nshowPwd=!this.nshowPwd;
   }
   
   conpasswordToggle()
   {
    this.confirmshowPwd=!this.confirmshowPwd;
   }
}
