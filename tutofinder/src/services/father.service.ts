import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FatherService {
  Uri: string = `${environment.CustomerService}/father`;
  constructor(private http: HttpClient) {}
  createFather(body, username) {
    return this.http.post(`${this.Uri}/${username}`, body);
  }
}
