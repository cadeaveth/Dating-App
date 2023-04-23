import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')|| '{}')?.token
  })
}
//potencijalno resenje umesto reda 8 ali opet ne radi
//za usera vraca null sto ne bi trebalo
//    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser') || '{}').token
//ne radi
//    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))?.token
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username, httpOptions);
  }
} 