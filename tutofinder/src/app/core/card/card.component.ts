import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/model/Card';
import { CardService } from 'src/services/card.service';
import { CreateCardComponent } from './create-card/create-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private dialog: MatDialog, private cardService: CardService) {}
  Cards: [Card];
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.cardService.getAllCards().subscribe((response: any) => {
      this.Cards = response;
    });
  }
  createCard() {
    this.dialog
      .open(CreateCardComponent, {})
      .afterClosed()
      .subscribe((response) => {
        this.cardService.getAllCards().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
  updateCard(card) {
    this.dialog
      .open(CreateCardComponent, {
        data: card,
      })
      .afterClosed()
      .subscribe((response) => {
        this.cardService.getAllCards().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
}
