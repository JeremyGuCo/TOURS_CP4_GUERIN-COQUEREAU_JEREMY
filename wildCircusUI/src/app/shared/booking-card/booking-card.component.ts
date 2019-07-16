import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent implements OnInit {

  @Input() IDshow: number;
  
  public bookings: Booking[] = [];

  constructor(
    public bookingService: BookingService,
  ) { }

  ngOnInit() {
    this.bookingService.getBookingsByShow(this.IDshow).subscribe(bookingByShow => this.bookings = bookingByShow)
  }

}
