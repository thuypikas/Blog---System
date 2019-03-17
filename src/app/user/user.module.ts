import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [UserComponent, LoginComponent, AdminComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }