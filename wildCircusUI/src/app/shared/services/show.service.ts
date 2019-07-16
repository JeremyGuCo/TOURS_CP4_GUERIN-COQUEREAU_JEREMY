import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(
    private http: HttpClient,
  ) { }

  public api = `${environment.apiUrl}`;


  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.api}/shows`);
  }
}