import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

event = {
  id : 1,
  name : 'Satya Angular connect',
  date: '23/05/2020',
  time: '10:00 am',
  imageurl: '/assets/images/angularconnect-shield.png',
  price: 599.99,
  location: {
    address: 'Miyapur',
    city: 'Hyderabad',
    country: 'India'
  }

}

}
