import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) { }
    
  public api = `${environment.apiUrl}`;
  
  createMessage(message: Message): Observable<Message>{
    return this.http.post<Message>(`${this.api}/messages`, message)
  }

  getAllMessages(): Observable<Message[]>{
    return this.http.get<Message[]>(`${this.api}/messages`)
  }
}
