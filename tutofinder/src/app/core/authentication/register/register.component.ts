import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelarRegistro: EventEmitter<boolean> = new EventEmitter();
  registerForm: FormGroup;
  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  cancelRegister() {
    this.cancelarRegistro.emit();
  }
  registerAccount() {
    if (this.registerForm.valid) {
      this.notificationService.openNotification(
        'Se ha registrado correctamente',
        'success'
      );
      this.cancelRegister();
    } else {
      this.notificationService.openNotification(
        'Por favor rellene los datos correctamente',
        'error'
      );
    }
  }
}
