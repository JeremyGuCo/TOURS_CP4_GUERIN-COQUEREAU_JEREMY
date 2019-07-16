import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/models/show.model';
import { ShowService } from 'src/app/shared/services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  public shows: Show[]=[];

  constructor(
    public showService: ShowService,
  ) { }

  ngOnInit() {
    this.showService.getAllShows().subscribe(allShows => this.shows = allShows);
  }

}
