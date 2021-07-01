import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TutorshipService } from 'src/services/tutorship.service';
import { CreateTutotshipComponent } from './create-tutotship/create-tutotship.component';

@Component({
  selector: 'app-tutorship',
  templateUrl: './tutorship.component.html',
  styleUrls: ['./tutorship.component.scss'],
})
export class TutorshipComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private tutorshipService: TutorshipService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }
  Tutorships = [];

  initialize() {
    this.tutorshipService.getAllTutorships().subscribe((response: any) => {
      this.Tutorships = response;
    });
  }
  createTutorship() {
    this.dialog.open(CreateTutotshipComponent, {});
  }
  updateTutorship(tutorship) {
    this.dialog
      .open(CreateTutotshipComponent, {
        data: tutorship,
      })
      .afterClosed()
      .subscribe((response) => {
        this.tutorshipService.getAllTutorships().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
}
