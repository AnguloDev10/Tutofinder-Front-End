import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  Uri: string = `${environment.CustomerService}/teacher`;
  constructor(private http: HttpClient) {}
  createTeacher(body, username) {
    return this.http.post(`${this.Uri}/${username}`, body);
  }
}
