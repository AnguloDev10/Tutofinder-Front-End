import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePaymentComponent } from './create-payment/create-payment.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  createPayment() {
    this.dialog.open(CreatePaymentComponent, {});
  }
}
