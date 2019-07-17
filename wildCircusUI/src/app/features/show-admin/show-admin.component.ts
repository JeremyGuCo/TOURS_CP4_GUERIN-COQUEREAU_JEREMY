import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/models/show.model';
import { ShowService } from 'src/app/shared/services/show.service';
import { ToastrService } from 'ngx-toastr';
import { ArtistService } from 'src/app/shared/services/artist.service';
import { Artist } from 'src/app/shared/models/artist.model';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.scss']
})
export class ShowAdminComponent implements OnInit {

  public artists: Artist[] = [];
  public shows: Show[] = [];

  constructor(
    private showService: ShowService,
    private toastr: ToastrService,
    public artistService: ArtistService,
  ) { }

  ngOnInit() {
    this.artistService.getAllArtists().subscribe(allArtist => this.artists = allArtist);
    this.showService.getAllShows().subscribe(allshow => this.shows = allshow);
  }

  createShow(show: Show) {
    this.showService.createShow(show).subscribe(() => {
      this.toastr.success('Spectacle créé');
      this.shows.push(show)
    },
      (err) => { this.toastr.warning('Impossible de créer un spectacle') })
  }

  deleteShow(id, i) {
    confirm('Confirmez-vous la suppression de ce spectacle ?')
    if (confirm) {
      this.showService.deleteShow(id).subscribe(
        () => {
          this.toastr.success('Suppression enregistrée');
          this.shows.splice(i, 1);
        }
      )
    }
  }
}
