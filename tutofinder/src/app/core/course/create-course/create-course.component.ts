import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateCourseComponent>) {}

  courseForm: FormGroup;
  ngOnInit(): void {
    this.courseForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
