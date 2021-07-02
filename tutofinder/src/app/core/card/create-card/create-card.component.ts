import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardService } from 'src/services/card.service';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private cardService: CardService,
    private notificationService: NotificationService
  ) {}
  cardForm: FormGroup;
  ngOnInit(): void {
    this.cardForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      expireDate: new FormControl('', [Validators.required]),
      ownerName: new FormControl('', [Validators.required]),
    });
    if (this.data != null) {
      this.cardForm.get('cardNumber').setValue(this.data.cardNumber);
      this.cardForm.get('expireDate').setValue(this.data.expireDate);
      this.cardForm.get('ownerName').setValue(this.data.ownerNumber);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  createCourse() {
    var body = {
      cardNumber: this.cardForm.get('cardNumber').value,
      expireDate: this.cardForm.get('expireDate').value,
      ownerName: this.cardForm.get('ownerName').value,
    };
    this.cardService.createCard(body).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'La tarjeta se ha creado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'La tarjeta no se ha creado correctamente',
          'error'
        );
      }
    );
  }
  editCourse() {
    var body = {
      cardNumber: this.cardForm.get('cardNumber').value,
      expireDate: this.cardForm.get('expireDate').value,
      ownerName: this.cardForm.get('ownerName').value,
    };
    this.cardService.updateCard(body, this.data.id).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'La tarjeta se ha editado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'La tarjeta no se ha editado correctamente',
          'error'
        );
      }
    );
  }
  deleteCourse() {
    this.cardService.deleteCardById(this.data.id).subscribe(
      (response: any) => {
        this.notificationService.openNotification(
          'La tarjeta se ha borrado correctamente',
          'success'
        );

        this.dialogRef.close();
      },
      (error) => {
        if (error.status == 200) {
          this.notificationService.openNotification(
            'La tarjeta se ha borrado correctamente',
            'success'
          );
          this.dialogRef.close();
        }
      }
    );
  }
}
