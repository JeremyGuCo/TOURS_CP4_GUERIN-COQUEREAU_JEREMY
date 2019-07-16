import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/shared/services/artist.service';
import { Artist } from 'src/app/shared/models/artist.model';

@Component({
  selector: 'app-artist-admin',
  templateUrl: './artist-admin.component.html',
  styleUrls: ['./artist-admin.component.scss']
})
export class ArtistAdminComponent implements OnInit {

  public artists: Artist[] = [];
  constructor(
    public artistService: ArtistService,
  ) { }

  ngOnInit() {
    this.artistService.getAllArtists().subscribe(allArtist => this.artists = allArtist)
  }

}
