import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  Uri: string = `${environment.PaymentService}/payment`;
  constructor(private http: HttpClient) {}

  getAllPayments() {
    return this.http.get(`${this.Uri}`);
  }
  getPaymentById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  deletePaymentById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }
  createPayment(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  updatePayment(body, id) {
    return this.http.put(`${this.Uri}/${id}`, body);
  }
}
