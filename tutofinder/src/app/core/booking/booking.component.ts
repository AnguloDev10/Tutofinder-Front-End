import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookingComponent } from './create-booking/create-booking.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  createBooking() {
    this.dialog.open(CreateBookingComponent, {});
  }
}
