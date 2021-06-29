import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateBookingComponent>) {}

  bookingForm: FormGroup;
  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      studentId: new FormControl('', [Validators.required]),
      tutorShipId: new FormControl('', [Validators.required]),
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
