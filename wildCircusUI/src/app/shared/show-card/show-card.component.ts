import { Component, OnInit, Input } from '@angular/core';
import { ShowService } from '../services/show.service';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  @Input() IDshow: number;

  public shows: Show[] = [];

  constructor(
    public showService: ShowService
  ) { }

  ngOnInit() {
    this.showService.getShowByID(this.IDshow).subscribe(showId => this.shows = showId)
  }

}
