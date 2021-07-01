import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/services/notification.service';
import { ReportService } from 'src/services/report.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss'],
})
export class CreateReportComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private notificationService: NotificationService,
    private reportService: ReportService
  ) {}
  reportForm: FormGroup;
  ngOnInit(): void {
    this.reportForm = new FormGroup({
      descriptionReport: new FormControl('', [Validators.required]),
      studentId: new FormControl(0, [Validators.required]),
      tutorShipId: new FormControl(0, [Validators.required]),
    });

    if (this.data != null) {
      this.reportForm
        .get('descriptionReport')
        .setValue(this.data.descriptionReport);
      this.reportForm.get('studentId').setValue(this.data.studentId);
      this.reportForm.get('tutorShipId').setValue(this.data.tutorShipId);
    }
  }
  cancel() {
    this.dialogRef.close();
  }
  createReport() {
    var body = {
      descriptionReport: this.reportForm.get('descriptionReport').value,
      studentId: this.reportForm.get('studentId').value,
      tutorShipId: this.reportForm.get('tutorShipId').value,
    };
    this.reportService.createReport(body).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'El reporte se ha creado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'El reporte no se ha creado correctamente',
          'error'
        );
      }
    );
  }
  editReport() {
    var body = {
      descriptionReport: this.reportForm.get('descriptionReport').value,
      studentId: this.reportForm.get('studentId').value,
      tutorShipId: this.reportForm.get('tutorShipId').value,
    };
    this.reportService.updateCourse(body, this.data.id).subscribe(
      (response) => {
        this.notificationService.openNotification(
          'El reporte se ha editado correctamente',
          'success'
        );
        this.dialogRef.close();
      },
      (error) => {
        this.notificationService.openNotification(
          'El reporte no se ha editado correctamente',
          'error'
        );
      }
    );
  }
  deleteReport() {
    this.reportService.deleteReportById(this.data.id).subscribe(
      (response: any) => {
        this.notificationService.openNotification(
          'El reporte se ha borrado correctamente',
          'success'
        );

        this.dialogRef.close();
      },
      (error) => {
        if (error.status == 200) {
          this.notificationService.openNotification(
            'El reporte se ha borrado correctamente',
            'success'
          );
          this.dialogRef.close();
        }
      }
    );
  }
}
