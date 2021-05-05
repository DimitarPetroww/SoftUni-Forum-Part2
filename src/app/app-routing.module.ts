import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AddThemeComponent } from './theme-module/add-theme/add-theme.component';
import { ThemeComponent } from "./theme-module/theme-list/theme-component"

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "themes",
    component: ThemeComponent
  },
  {
    path: "add-theme",
    component: AddThemeComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
