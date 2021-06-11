import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss'],
})
export class LeftSideNavComponent implements OnInit {
  constructor() {}
  @Output() closeSideNav: EventEmitter<boolean> = new EventEmitter(false);
  items = [
    { name: 'Inicio', icon: 'home' },
    { name: 'Tutoría', icon: 'school' },
    { name: 'Membresía', icon: 'card_membership' },
    { name: 'Perfil', icon: 'face' },
    { name: 'Favoritos', icon: 'star' },
    { name: 'Cerrar Sesión', icon: 'logout' },
  ];
  ngOnInit(): void {}
}
