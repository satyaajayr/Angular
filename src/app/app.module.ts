import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyAppComponent } from './my-app.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  declarations: [
    MyAppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyAppComponent]
})
export class MyAppModule { }
