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

  getAllBooking() {
    return this.http.get<[]>(this.Uri);
  }
  getBookingById(id) {
    return this.http.get<any>(`${this.Uri}/${id}`);
  }
  deleteBookingById(id) {
    return this.http.delete<any>(`${this.Uri}/${id}`);
  }
  createBooking(body) {
    return this.http.post<any>(`${this.Uri}`, body);
  }
}
