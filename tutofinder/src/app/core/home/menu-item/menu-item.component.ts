import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() imageUrl =
    'https://media.discordapp.net/attachments/825475252133167117/852569403756904468/image-not-found.png?width=1202&height=676';
  @Input() menuItem = '';
  constructor() {}

  ngOnInit(): void {}
}
