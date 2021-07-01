import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CourseService } from 'src/services/course.service';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCourseComponent>,
    private CourseService: CourseService,
    private NotificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  courseForm: FormGroup;
  ngOnInit(): void {
    this.courseForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

    if (this.data != null) {
      this.courseForm.get('name').setValue(this.data.name);
    }
  }
  cancel() {
    this.dialogRef.close();
  }
  createCourse() {
    var body = {
      name: this.courseForm.get('name').value,
    };
    this.CourseService.createCourse(body).subscribe(
      (response) => {
        this.NotificationService.openNotification(
          'El curso se ha creado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.NotificationService.openNotification(
          'El curso no se ha creado correctamente',
          'error'
        );
      }
    );
  }
  editCourse() {
    var body = {
      name: this.courseForm.get('name').value,
    };
    this.CourseService.updateCourse(body, this.data.id).subscribe(
      (response) => {
        this.NotificationService.openNotification(
          'El curso se ha editado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.NotificationService.openNotification(
          'El curso no se ha editado correctamente',
          'error'
        );
      }
    );
  }
  deleteCourse() {
    this.CourseService.deleteCourseById(this.data.id).subscribe(
      (response: any) => {
        this.NotificationService.openNotification(
          'El curso se ha borrado correctamente',
          'success'
        );

        this.dialogRef.close();
      },
      (error) => {
        if (error.status == 200) {
          this.NotificationService.openNotification(
            'El curso se ha borrado correctamente',
            'success'
          );
          this.dialogRef.close();
        }
      }
    );
  }
}
