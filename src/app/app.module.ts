import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { WorkWithHttpComponent } from './work-with-http/work-with-http.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkWithHttpComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
