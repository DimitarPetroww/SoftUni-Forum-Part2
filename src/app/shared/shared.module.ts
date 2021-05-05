import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
