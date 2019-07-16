import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/shared/services/show.service';
import { Show } from 'src/app/shared/models/show.model';

@Component({
  selector: 'app-booking-admin',
  templateUrl: './booking-admin.component.html',
  styleUrls: ['./booking-admin.component.scss']
})
export class BookingAdminComponent implements OnInit {

  public shows: Show[] = [];
  constructor(
    public showsService: ShowService,
  ) { }

  ngOnInit() {
    this.showsService.getAllShows().subscribe(allShows => this.shows = allShows)
  }

}
