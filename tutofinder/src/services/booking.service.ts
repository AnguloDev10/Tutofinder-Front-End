import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Booking } from 'src/app/model/Booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  Uri: string = `${environment.TutorshipService}/booking`;
  constructor(private http: HttpClient) {}

  getAllBookings() {
    return this.http.get(`${this.Uri}`);
  }
  getBookingById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  deleteBookingById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }
  createBooking(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  updateBooking(body, id) {
    return this.http.put(`${this.Uri}/${id}`, body);
  }
}
