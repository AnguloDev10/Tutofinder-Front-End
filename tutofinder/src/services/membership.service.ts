import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  Uri: string = `${environment.PaymentService}/membership`;
  constructor(private http: HttpClient) {}

  getAllMemberships() {
    return this.http.get(`${this.Uri}`);
  }
  getMembershipById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  createMembership(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  deleteMembershipById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }
  updateMembership(body, id) {
    return this.http.put(`${this.Uri}/${id}`, body);
  }
}
