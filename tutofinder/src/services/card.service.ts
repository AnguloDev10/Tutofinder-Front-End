import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  Uri: string = `${environment}/Card`;
  constructor(private http: HttpClient) {}

  getAllCards() {
    return this.http.get(`${this.Uri}`);
  }
  getCardById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  createCard(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  deleteCardById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }
}
