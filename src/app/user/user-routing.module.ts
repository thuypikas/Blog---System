import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../auth.guard';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        children: [
          {
            path: '',
            redirectTo: 'login',
          },
          {
            path: 'login',
            component: LoginComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'register',
            component: RegisterComponent,
          },
          {
            path: 'admin',
            component: AdminComponent
          },
        ]
      }
    ])
  ]
})
export class UserRoutingModule { }
