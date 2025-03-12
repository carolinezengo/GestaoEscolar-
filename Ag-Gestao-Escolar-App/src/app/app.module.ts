import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
