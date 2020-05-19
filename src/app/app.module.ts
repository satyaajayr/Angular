import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyAppComponent } from './my-app.component';

@NgModule({
  declarations: [
    MyAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyAppComponent]
})
export class MyAppModule { }
