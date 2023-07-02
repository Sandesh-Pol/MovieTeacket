import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CardTwoComponent } from './card-two/card-two.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    CardTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
