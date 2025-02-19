import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchComponent } from './components/search/search.component';
import { FeaturesComponent } from './components/features/features.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SearchComponent,
    FeaturesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
