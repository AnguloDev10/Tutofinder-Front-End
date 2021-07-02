import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Payment } from 'src/app/model/Payment';
import { PaymentService } from 'src/services/payment.service';
import { CreatePaymentComponent } from './create-payment/create-payment.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private paymentService: PaymentService
  ) {}

  Payments: [Payment];
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.paymentService.getAllPayments().subscribe((response: any) => {
      this.Payments = response;
    });
  }
  createPayment() {
    this.dialog
      .open(CreatePaymentComponent, {})
      .afterClosed()
      .subscribe((response) => {
        this.paymentService.getAllPayments().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
  updatePayment(payment) {
    this.dialog
      .open(CreatePaymentComponent, {
        data: payment,
      })
      .afterClosed()
      .subscribe((response) => {
        this.paymentService.getAllPayments().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
}
