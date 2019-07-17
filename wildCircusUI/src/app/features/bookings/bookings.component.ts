import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/shared/models/booking.model';
import { BookingService } from 'src/app/shared/services/booking.service';
import { Show } from 'src/app/shared/models/show.model';
import { ShowService } from 'src/app/shared/services/show.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public newBooking: Booking;
  public shows: Show[] = [];

  constructor(
    public bookingService: BookingService,
    public showService: ShowService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.showService.getAllShows().subscribe(allShow => this.shows = allShow);
  }

  createBooking(booking: Booking) {
    this.bookingService.createBooking(booking).subscribe(newBook => { this.newBooking = newBook;
      this.toastr.success('Réservation enregistré'); },
      (err) => { this.toastr.warning('Enregistrement impossible') });
  }

}

