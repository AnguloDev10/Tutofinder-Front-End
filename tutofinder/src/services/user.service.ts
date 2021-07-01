import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Uri: string = `${environment.CustomerService}/user`;
  constructor(private http: HttpClient) {}
  createUser(body, rolId) {
    return this.http.post(`${this.Uri}/${rolId}`, body);
  }
}
