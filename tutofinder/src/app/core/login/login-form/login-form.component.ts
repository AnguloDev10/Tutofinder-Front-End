import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  @Output() registrarse = new EventEmitter();
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  activeRegister() {
    this.registrarse.emit();
  }
  logIn() {
    var body = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
      grant_type: 'password',
    };

    this.authenticationService.logIn(body).subscribe((response: any) => {});
  }
}
