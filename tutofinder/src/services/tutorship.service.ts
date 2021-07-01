import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TutorshipService {
  Uri: string = `${environment.TutorshipService}/tutorShip`;
  constructor(private http: HttpClient) {}

  getAllTutorships() {
    return this.http.get(`${this.Uri}`);
  }
  getTutorshipById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  deleteTutorshipById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }
  createTutorship(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  updateTutorship(body, id) {
    return this.http.put(`${this.Uri}/${id}`, body);
  }
}
