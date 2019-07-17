import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/shared/services/artist.service';
import { Artist } from 'src/app/shared/models/artist.model';
import { error } from 'util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artist-admin',
  templateUrl: './artist-admin.component.html',
  styleUrls: ['./artist-admin.component.scss']
})
export class ArtistAdminComponent implements OnInit {

  public update: boolean = false;
  public artists: Artist[] = [];
  public isCreate: boolean = false;

  constructor(
    public artistService: ArtistService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.artistService.getAllArtists().subscribe(allArtist => this.artists = allArtist)
  }

  updateArtist() {
    this.update = !this.update;
  }

  modifyArtist(Artist: Artist) {
    this.artistService.updateArtistByID(Artist.id, Artist).subscribe();
    this.update = !this.update;
  }

  cancelArtist(){
    this.isCreate = !this.isCreate
  }

  deleteArtist(id, index) {
    this.artistService.deleteArtistByID(id).subscribe();
    this.artists.splice(index, 1)
  }

  createArtist(artist: Artist){
    this.artistService.createArtist(artist).subscribe((newArtist) => this.artists.push(newArtist))
  }

  create(){
    this.isCreate = true
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
