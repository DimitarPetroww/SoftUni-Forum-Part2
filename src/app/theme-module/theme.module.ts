import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme-list/theme-component';
import { HttpClientModule } from '@angular/common/http';
import { AddThemeComponent } from './add-theme/add-theme.component';

@NgModule({
  declarations: [ThemeComponent, AddThemeComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ThemeComponent, AddThemeComponent]
})
export class ThemeModule { }
