import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:any[]
  
  constructor(private eventService: EventService, private toastrService: ToastrService) {
    
   }

   handleThumbnailClick(data){
    this.toastrService.success(data,"Success");
   }

  ngOnInit(): void {
    this.events = this.eventService.getService();
  }

  handleEventClicked(data){
    alert(data)
  }

}
