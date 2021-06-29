import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-tutotship',
  templateUrl: './create-tutotship.component.html',
  styleUrls: ['./create-tutotship.component.scss'],
})
export class CreateTutotshipComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateTutotshipComponent>) {}
  tutorshipForm: FormGroup;
  ngOnInit(): void {
    this.tutorshipForm = new FormGroup({
      tutorshipDescription: new FormControl('', [Validators.required]),
      minutesAmount: new FormControl('', [Validators.required]),
      courseId: new FormControl('', [Validators.required]),
      teacherId: new FormControl('', [Validators.required]),
    });
  }
  createTutorship() {}
  cancelTutorship() {
    this.dialogRef.close();
  }
}
