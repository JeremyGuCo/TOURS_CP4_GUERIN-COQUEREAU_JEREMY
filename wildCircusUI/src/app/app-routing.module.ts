import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShowsComponent } from './features/shows/shows.component';
import { ArtistsComponent } from './features/artists/artists.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { ContactComponent } from './features/contact/contact.component';
import { BookingAdminComponent } from './features/booking-admin/booking-admin.component';
import { ContactAdminComponent } from './features/contact-admin/contact-admin.component';
import { ArtistAdminComponent } from './features/artist-admin/artist-admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'booking', component: BookingsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bookingAdmin', component: BookingAdminComponent },
  { path: 'messageAdmin', component: ContactAdminComponent },
  { path: 'artistAdmin', component: ArtistAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
