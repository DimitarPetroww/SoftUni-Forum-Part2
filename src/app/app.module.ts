import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { PostService } from './services/post.service';
import { ThemeService } from './services/theme.service';
import { ThemeComponent } from './theme/theme-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [ThemeService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
