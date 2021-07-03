import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Booking } from 'src/app/model/Booking';
import { BookingService } from 'src/services/booking.service';
import { CreateBookingComponent } from './create-booking/create-booking.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private bookingService: BookingService
  ) {}

  Bookings: [Booking];
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.bookingService.getAllBookings().subscribe((response: any) => {
      this.Bookings = response;
    });
  }
  createBooking() {
    this.dialog
      .open(CreateBookingComponent, {})
      .afterClosed()
      .subscribe((response) => {
        this.bookingService.getAllBookings().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
  updateBooking(booking) {
    this.dialog
      .open(CreateBookingComponent, {
        data: booking,
      })
      .afterClosed()
      .subscribe((response) => {
        this.bookingService.getAllBookings().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
}
