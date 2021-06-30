import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.scss'],
})
export class CreatePaymentComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreatePaymentComponent>) {}
  paymentForm: FormGroup;
  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      paymentDescription: new FormControl('', [Validators.required]),
      fatherId: new FormControl('', [Validators.required]),
      cardId: new FormControl('', [Validators.required]),
      paymentCost: new FormControl('', [Validators.required]),
      bookingId: new FormControl('', [Validators.required]),
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
