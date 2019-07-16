import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() IDshow: number;

  public artists: Artist[]=[];

  constructor(
    public artistService: ArtistService,
  ) { }

  ngOnInit() {
    this.artistService.getArtistsByShow(this.IDshow).subscribe(artistsShow => this.artists = artistsShow)
  }

}
