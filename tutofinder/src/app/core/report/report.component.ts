import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportService } from 'src/services/report.service';
import { CreateReportComponent } from './create-report/create-report.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private reportService: ReportService
  ) {}
  Reports = [];
  ngOnInit(): void {
    this.initialize();
  }

  createReport() {
    this.dialog
      .open(CreateReportComponent, {})
      .afterClosed()
      .subscribe((response) => {
        this.reportService.getAllReports().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
  updateReport(report) {
    this.dialog
      .open(CreateReportComponent, {
        data: report,
      })
      .afterClosed()
      .subscribe((response) => {
        this.reportService.getAllReports().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
  initialize() {
    this.reportService.getAllReports().subscribe((response: any) => {
      this.Reports = response;
    });
  }
}
