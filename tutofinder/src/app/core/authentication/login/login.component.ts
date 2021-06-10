import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private notificationService: NotificationService, private router: Router) {}

  @Output() registrarse: EventEmitter<boolean> = new EventEmitter();
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('student@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('demopassword', [Validators.required]),
    });
  }
  openRegister() {
    this.registrarse.emit();
  }
  logIn() {
    this.router.navigateByUrl('/dashboardStudent');
  }
}
