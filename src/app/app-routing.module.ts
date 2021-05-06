import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
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
    path: "**",
    component: NotFoundComponent
  }
];
export const AppRoutingModule = RouterModule.forRoot(routes)