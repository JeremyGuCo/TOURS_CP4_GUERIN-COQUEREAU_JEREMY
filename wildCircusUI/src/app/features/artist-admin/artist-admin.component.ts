import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/shared/services/artist.service';
import { Artist } from 'src/app/shared/models/artist.model';
import { error } from 'util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ArtistsComponent } from '../artists/artists.component';

@Component({
  selector: 'app-artist-admin',
  templateUrl: './artist-admin.component.html',
  styleUrls: ['./artist-admin.component.scss']
})
export class ArtistAdminComponent extends ArtistsComponent {

  public update: boolean = false;
  public artists: Artist[] = [];
  public isCreate: boolean = false;

  constructor(
    public artistService: ArtistService,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) { 
    super(artistService)
  }

  updateArtist() {
    this.update = !this.update;
  }

  modifyArtist(Artist: Artist) {
    this.artistService.updateArtistByID(Artist.id, Artist).subscribe();
    this.update = !this.update;
  }

  cancelArtist() {
    this.isCreate = !this.isCreate
  }

  deleteArtist(id, index) {
    confirm('Voulez-vous supprimer l\'artiste?')
    if (confirm) {
      this.artistService.deleteArtistByID(id).subscribe(() =>
      {
        this.artists.splice(index, 1);
        this.toastr.success('Artiste supprimé');
      },
      (err) => this.toastr.success('Suppression impossible'));
    }

  }

  createArtist(artist: Artist) {
    this.artistService.createArtist(artist).subscribe(
      newArtist => {
        this.artists.push(newArtist);
        this.toastr.success('Nouvel Artiste enregistré');
      },
      (err) => { this.toastr.success('Enregistrement impossible') }
    )
  }

  create() {
    this.isCreate = true
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
