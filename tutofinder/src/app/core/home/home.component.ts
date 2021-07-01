import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  Rol = '';
  ngOnInit(): void {
    this.Rol = this.authenticationService.getRol();

    if (this.Rol.length == 0) {
      this.authenticationService.logOut();
    }
    console.log(this.Rol);
  }
}
