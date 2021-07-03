import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/services/notification.service';
import { TutorshipService } from 'src/services/tutorship.service';

@Component({
  selector: 'app-create-tutotship',
  templateUrl: './create-tutotship.component.html',
  styleUrls: ['./create-tutotship.component.scss'],
})
export class CreateTutotshipComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateTutotshipComponent>,
    private NotificationService: NotificationService,
    private TutorshipService: TutorshipService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  tutorshipForm: FormGroup;
  ngOnInit(): void {
    this.tutorshipForm = new FormGroup({
      tutorshipDescription: new FormControl('', [Validators.required]),
      minutesAmount: new FormControl('', [Validators.required]),
      courseId: new FormControl('', [Validators.required]),
      teacherId: new FormControl('', [Validators.required]),
    });
    console.log(this.data);
    if (this.data != null) {
      this.tutorshipForm
        .get('tutorshipDescription')
        .setValue(this.data.description);
      this.tutorshipForm.get('minutesAmount').setValue(this.data.minutes);
      this.tutorshipForm.get('courseId').setValue(this.data.courseId);
      this.tutorshipForm.get('teacherId').setValue(this.data.teacherId);
    }
  }
  createTutorship() {
    var body = {
      tutorShipDescription: this.tutorshipForm.get('tutorshipDescription')
        .value,
      minutesAmmount: Number(this.tutorshipForm.get('minutesAmount').value),
      courseId: Number(this.tutorshipForm.get('courseId').value),
      teacherId: Number(this.tutorshipForm.get('teacherId').value),
    };
    this.TutorshipService.createTutorship(body).subscribe(
      (response) => {
        this.NotificationService.openNotification(
          'La tutoría se ha creado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.NotificationService.openNotification(
          'La tutoría no se ha creado correctamente',
          'error'
        );
      }
    );
  }
  editTutorship() {
    var body = {
      tutorshipDescription: this.tutorshipForm.get('tutorshipDescription')
        .value,
      minutesAmount: this.tutorshipForm.get('minutesAmount').value,
      courseId: this.tutorshipForm.get('courseId').value,
      teacherId: this.tutorshipForm.get('teacherId').value,
    };
    this.TutorshipService.updateTutorship(body, this.data.id).subscribe(
      (response) => {
        this.NotificationService.openNotification(
          'La tutoría se ha editado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.NotificationService.openNotification(
          'La tutoría no se ha editado correctamente',
          'error'
        );
      }
    );
  }
  deleteTutorship() {
    this.TutorshipService.deleteTutorshipById(this.data.id).subscribe(
      (response: any) => {
        this.NotificationService.openNotification(
          'La tutoría se ha borrado correctamente',
          'success'
        );

        this.dialogRef.close();
      },
      (error) => {
        if (error.status == 200) {
          this.NotificationService.openNotification(
            'La tutoría se ha borrado correctamente',
            'success'
          );
          this.dialogRef.close();
        }
      }
    );
  }
  cancelTutorship() {
    this.dialogRef.close();
  }
}
