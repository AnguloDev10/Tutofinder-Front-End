import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss'],
})
export class LeftSideNavComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  @Output() closeSideNav: EventEmitter<boolean> = new EventEmitter(false);
  items = [
    { name: 'Inicio', icon: 'home', redirect: '/home' },
    { name: 'Tutoría', icon: 'school', redirect: '/tutorship' },
    { name: 'Membresía', icon: 'card_membership', redirect: '/membership' },
    { name: 'Perfil', icon: 'face', redirect: '/profile' },
    { name: 'Favoritos', icon: 'star', redirect: '/favorite' },
    { name: 'Reserva', icon: 'book_online', redirect: '/favorite' },
    { name: 'Curso', icon: 'book', redirect: '/favorite' },
    { name: 'Reporte', icon: 'summarize', redirect: '/favorite' },
    { name: 'Cerrar Sesión', icon: 'logout', redirect: '/' },
  ];
  ngOnInit(): void {}
  afterRedirect(name) {
    if (name == 'Cerrar Sesión') {
      this.authenticationService.logOut();
    }
    this.closeSideNav.emit();
  }
}
