import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignupComponent } from './user-signup/user-signup.component';



@NgModule({
  declarations: [
    UserSignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
UserSignupComponent
  ]
})
export class UserModule { }
