import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardComponent } from './create-card/create-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  createCard() {
    this.dialog.open(CreateCardComponent, {});
  }
}
