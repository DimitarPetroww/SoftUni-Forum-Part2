import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { PostService } from './services/post.service';
import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';
import { ThemeModule } from './theme-module/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ThemeModule,
    HttpClientModule
  ],
  providers: [ThemeService, PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
