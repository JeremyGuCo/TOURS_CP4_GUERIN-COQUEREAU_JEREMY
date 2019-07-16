import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ShowsComponent } from './features/shows/shows.component';
import { ArtistsComponent } from './features/artists/artists.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { ContactComponent } from './features/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistCardComponent } from './shared/artist-card/artist-card.component';
import { FormsModule } from '@angular/forms';
import { BookingAdminComponent } from './features/booking-admin/booking-admin.component';
import { ShowCardComponent } from './shared/show-card/show-card.component';
import { BookingCardComponent } from './shared/booking-card/booking-card.component';
import { ContactAdminComponent } from './features/contact-admin/contact-admin.component';
import { ArtistAdminComponent } from './features/artist-admin/artist-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShowsComponent,
    ArtistsComponent,
    BookingsComponent,
    ContactComponent,
    ArtistCardComponent,
    BookingAdminComponent,
    ShowCardComponent,
    BookingCardComponent,
    ContactAdminComponent,
    ArtistAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
