import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateCardComponent>) {}
  cardForm: FormGroup;
  ngOnInit(): void {
    this.cardForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      expireDate: new FormControl('', [Validators.required]),
      ownerName: new FormControl('', [Validators.required]),
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
