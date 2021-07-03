import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookingService } from 'src/services/booking.service';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateBookingComponent>,
    private bookingService: BookingService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  bookingForm: FormGroup;
  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      studentId: new FormControl('', [Validators.required]),
      tutorShipId: new FormControl('', [Validators.required]),
    });
    if (this.data != null) {
      this.bookingForm.get('studentId').setValue(this.data.studentId);
      this.bookingForm.get('tutorShipId').setValue(this.data.tutorshipId);
    }
  }
  cancel() {
    this.dialogRef.close();
  }
  createBooking() {
    var body = {
      studentId: this.bookingForm.get('studentId').value,
      tutorShipId: this.bookingForm.get('tutorShipId').value,
    };
    this.bookingService.createBooking(body).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'La reserva se ha creado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'La reserva no se ha creado correctamente',
          'error'
        );
      }
    );
  }
  editBooking() {
    var body = {
      studentId: this.bookingForm.get('studentId').value,
      tutorShipId: this.bookingForm.get('tutorShipId').value,
    };
    this.bookingService.updateBooking(body, this.data.id).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'La reserva se ha editado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'La reserva no se ha editado correctamente',
          'error'
        );
      }
    );
  }
  deleteBooking() {
    this.bookingService.deleteBookingById(this.data.id).subscribe(
      (response: any) => {
        this.notificationService.openNotification(
          'La reserva se ha borrado correctamente',
          'success'
        );

        this.dialogRef.close();
      },
      (error) => {
        if (error.status == 200) {
          this.notificationService.openNotification(
            'La reserva se ha borrado correctamente',
            'success'
          );
          this.dialogRef.close();
        }
      }
    );
  }
}
