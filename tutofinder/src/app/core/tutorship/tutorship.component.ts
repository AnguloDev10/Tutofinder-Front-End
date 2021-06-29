import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTutotshipComponent } from './create-tutotship/create-tutotship.component';

@Component({
  selector: 'app-tutorship',
  templateUrl: './tutorship.component.html',
  styleUrls: ['./tutorship.component.scss'],
})
export class TutorshipComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  createTutorship() {
    this.dialog.open(CreateTutotshipComponent, {});
  }
}
