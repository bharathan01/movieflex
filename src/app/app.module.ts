import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header_nav/header/header.component';
import { HomeComponent } from './home_page/home/home.component';
import { MoviereviewModule } from './moviereview/moviereview.module';
import { MovieCatagoryComponent } from './movie-catagory/movie-catagory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieCatagoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviereviewModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
