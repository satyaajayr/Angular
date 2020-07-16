import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any
  @Output() eventClick = new EventEmitter()
  templateVariable:any = "Access template variable in child"
  constructor() { }

  ngOnInit(): void {
  }

  alertTest(){
    alert("Test")
  }

  handleClickMe(){
    this.eventClick.emit("Clicked " + this.event.name)
  }

}
