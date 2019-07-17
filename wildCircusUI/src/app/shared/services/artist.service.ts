import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    private http: HttpClient,
  ) { }

  public api = `${environment.apiUrl}`;


  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.api}/artists`);
  }

  getArtistsByShow(id): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.api}/shows/${id}/artists`)
  }

  updateArtistByID(id, formData): Observable<Artist> {
    return this.http.put<Artist>(`${this.api}/artists/${id}`, formData)
  }

  deleteArtistByID(id): Observable<Artist> {
    return this.http.delete<Artist>(`${this.api}/artists/${id}`)
  }

  createArtist(formData): Observable<Artist> {
    return this.http.post<Artist>(`${this.api}/artists`, formData)
  }


}
