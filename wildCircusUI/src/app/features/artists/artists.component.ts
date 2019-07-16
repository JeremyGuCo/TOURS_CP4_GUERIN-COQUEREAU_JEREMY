import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/shared/services/artist.service';
import { Artist } from 'src/app/shared/models/artist.model';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public artists: Artist[]=[];

  constructor(
    public artistService: ArtistService,
  ) { }

  ngOnInit() {
    this.artistService.getAllArtists().subscribe(allArtists => this.artists = allArtists);
    
  }

}
