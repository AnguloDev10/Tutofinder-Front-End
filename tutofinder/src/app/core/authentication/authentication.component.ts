import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  constructor() {}
  activeOption = [true, false];

  ngOnInit(): void {}

  activeRegisterComponent() {
    this.activeOption.fill(false);
    this.activeOption[1] = true;
  }
  activeLoginComponent() {
    this.activeOption.fill(false);
    this.activeOption[0] = true;
  }
}
