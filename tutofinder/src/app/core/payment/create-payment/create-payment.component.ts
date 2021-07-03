import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/services/notification.service';
import { PaymentService } from 'src/services/payment.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.scss'],
})
export class CreatePaymentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreatePaymentComponent>,
    private paymentService: PaymentService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  paymentForm: FormGroup;
  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      paymentDescription: new FormControl('', [Validators.required]),
      fatherId: new FormControl('', [Validators.required]),
      cardId: new FormControl('', [Validators.required]),
      paymentCost: new FormControl('', [Validators.required]),
      bookingId: new FormControl('', [Validators.required]),
    });
    if (this.data != null) {
      this.paymentForm
        .get('paymentDescription')
        .setValue(this.data.paymentDescription);
      this.paymentForm.get('fatherId').setValue(this.data.fatherId);
      this.paymentForm.get('cardId').setValue(this.data.cardId);
      this.paymentForm.get('paymentCost').setValue(this.data.paymentCost);
      this.paymentForm.get('bookingId').setValue(this.data.reservation.id);
    }
  }
  cancel() {
    this.dialogRef.close();
  }

  createPayment() {
    var body = {
      paymentDescription: this.paymentForm.get('paymentDescription').value,
      fatherId: Number(this.paymentForm.get('fatherId').value),
      cardId: Number(this.paymentForm.get('cardId').value),
      paymentCost: Number(this.paymentForm.get('paymentCost').value),
      bookingId: Number(this.paymentForm.get('bookingId').value),
    };
    this.paymentService.createPayment(body).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'El pago se ha creado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'El pago no se ha creado correctamente',
          'error'
        );
      }
    );
  }
  editPayment() {
    var body = {
      paymentDescription: this.paymentForm.get('paymentDescription').value,
      fatherId: Number(this.paymentForm.get('fatherId').value),
      cardId: Number(this.paymentForm.get('cardId').value),
      paymentCost: Number(this.paymentForm.get('paymentCost').value),
      bookingId: Number(this.paymentForm.get('bookingId').value),
    };
    this.paymentService.updatePayment(body, this.data.id).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'El pago se ha editado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'El pago no se ha editado correctamente',
          'error'
        );
      }
    );
  }
  deletePayment() {
    this.paymentService.deletePaymentById(this.data.id).subscribe(
      (response: any) => {
        this.notificationService.openNotification(
          'El pago se ha borrado correctamente',
          'success'
        );

        this.dialogRef.close();
      },
      (error) => {
        if (error.status == 200) {
          this.notificationService.openNotification(
            'El pago se ha borrado correctamente',
            'success'
          );
          this.dialogRef.close();
        }
      }
    );
  }
}
