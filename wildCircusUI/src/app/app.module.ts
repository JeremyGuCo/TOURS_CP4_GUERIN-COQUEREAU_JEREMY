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
import { AdminComponent } from './features/admin/admin.component';

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
