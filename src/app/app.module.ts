import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyAppComponent } from './my-app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
 
@NgModule({
  declarations: [
    MyAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService],
  bootstrap: [MyAppComponent]
})
export class MyAppModule { }
