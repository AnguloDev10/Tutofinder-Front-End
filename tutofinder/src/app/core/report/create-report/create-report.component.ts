import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss'],
})
export class CreateReportComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateReportComponent>) {}
  reportForm: FormGroup;
  ngOnInit(): void {
    this.reportForm = new FormGroup({
      descriptionReport: new FormControl('', [Validators.required]),
      studentId: new FormControl(0, [Validators.required]),
      tutorshipId: new FormControl(0, [Validators.required]),
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
