import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  @Output() registrarse: EventEmitter<boolean> = new EventEmitter();
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  openRegister() {
    this.registrarse.emit();
  }
  logIn() {
    if (this.loginForm.valid) {
      this.notificationService.openNotification(
        'Se ha logeado correctamente',
        'success'
      );
    } else {
      this.notificationService.openNotification(
        'Por ingrese sus datos de manera correcta',
        'error'
      );
    }
  }
}
