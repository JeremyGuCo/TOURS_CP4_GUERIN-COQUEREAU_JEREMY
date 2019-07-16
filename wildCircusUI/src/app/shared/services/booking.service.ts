import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  public api = `${environment.apiUrl}`;

createBooking(formData: Booking): Observable<Booking>{
  return this.http.post<Booking>(`${this.api}/bookings`, formData)
}

getAllBookings(): Observable<Booking[]>{
  return this.http.get<Booking[]>(`${this.api}/bookings`)
}

getBookingsByShow(id: number): Observable<Booking[]>{
  return this.http.get<Booking[]>(`${this.api}/shows/${id}/bookings`)
}

}
