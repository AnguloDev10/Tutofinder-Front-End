import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/services/notification.service';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CreateStudentComponent>,
    private notificationService: NotificationService,
    private studentService: StudentService
  ) {}

  studentForm: FormGroup;
  ngOnInit(): void {
    this.studentForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      educationLevel: new FormControl('', [Validators.required]),
      fatherId: new FormControl('', [Validators.required]),
    });

    if (this.data != null) {
      this.studentForm.get('firstName').setValue(this.data.firstName);
      this.studentForm.get('lastName').setValue(this.data.lastName);
      this.studentForm.get('dni').setValue(this.data.dni);
      this.studentForm.get('email').setValue(this.data.email);
      console.log(this.data);
      this.studentForm.get('educationLevel').setValue(this.data.educationLevel);
      this.studentForm.get('fatherId').setValue(this.data.father.fatherId);
    }
  }
  createStudent() {
    if (this.studentForm.valid) {
      var body = {
        firstName: this.studentForm.get('firstName').value,
        lastName: this.studentForm.get('lastName').value,
        dni: this.studentForm.get('dni').value,
        email: this.studentForm.get('email').value,
        educationLevel: this.studentForm.get('educationLevel').value,
        father: {
          id: this.studentForm.get('fatherId').value,
        },
      };

      this.studentService.createStudent(body).subscribe((response) => {
        this.dialogRef.close();
        this.notificationService.openNotification(
          'Se ha creado el estudiante correctamente',
          'success'
        );
      });
    } else {
      this.notificationService.openNotification(
        'No se ha creado el estudiante',
        'success'
      );
    }
  }
  updateStudent() {
    if (this.studentForm.valid) {
      var body = {
        firstName: this.studentForm.get('firstName').value,
        lastName: this.studentForm.get('lastName').value,
        dni: this.studentForm.get('dni').value,
        email: this.studentForm.get('email').value,
        educationLevel: this.studentForm.get('educationLevel').value,
        father: {
          id: this.studentForm.get('fatherId').value,
        },
      };

      this.studentService
        .updateStudent(body, this.data.id)
        .subscribe((response) => {
          this.dialogRef.close();
          this.notificationService.openNotification(
            'Se ha creado el estudiante correctamente',
            'success'
          );
        });
    } else {
      this.notificationService.openNotification(
        'No se ha creado el estudiante',
        'success'
      );
    }
  }
  deleteStudent() {
    this.studentService.deleteStudentById(this.data.id).subscribe(
      (response: any) => {
        this.notificationService.openNotification(
          'El estdudiante se ha borrado correctamente',
          'success'
        );

        this.dialogRef.close();
      },
      (error) => {
        if (error.status == 200) {
          this.notificationService.openNotification(
            'El estdudiante se ha borrado correctamente',
            'success'
          );
          this.dialogRef.close();
        }
      }
    );
  }
  cancel() {
    this.dialogRef.close();
  }
}
