import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FatherService } from 'src/services/father.service';
import { NotificationService } from 'src/services/notification.service';
import { TeacherService } from 'src/services/teacher.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Output() cancelarRegistro = new EventEmitter();
  constructor(
    private userService: UserService,
    private fatherService: FatherService,
    private notificationService: NotificationService,
    private teacherService: TeacherService
  ) {}
  isFather = false;
  registerDocenteForm: FormGroup;
  registerPadreForm: FormGroup;
  ngOnInit(): void {
    this.registerDocenteForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      depositNumber: new FormControl('', [Validators.required]),
      hourlyCost: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
    });
    this.registerPadreForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
    });
  }
  activeLogin() {
    this.cancelarRegistro.emit();
  }
  register() {
    if (this.isFather) {
      if (this.registerPadreForm.valid) {
        let bodyUser = {
          username: this.registerPadreForm.get('username').value,
          password: this.registerPadreForm.get('password').value,
          email: this.registerPadreForm.get('email').value,
        };
        let rol = 2;
        this.userService
          .createUser(bodyUser, rol)
          .subscribe((response: any) => {
            let bodyFather = {
              firstName: this.registerPadreForm.get('firstname').value,
              lastName: this.registerPadreForm.get('lastname').value,
              dni: this.registerPadreForm.get('dni').value,
              address: {
                street: this.registerPadreForm.get('street').value,
                city: this.registerPadreForm.get('city').value,
                state: this.registerPadreForm.get('state').value,
                country: this.registerPadreForm.get('country').value,
                zipCode: this.registerPadreForm.get('zipcode').value,
              },
            };
            let username = response.username;
            this.fatherService.createFather(bodyFather, username).subscribe(
              (response: any) => {
                this.notificationService.openNotification(
                  'Se ha registrado correctamente',
                  'success'
                );
                this.activeLogin();
              },
              (error) => {
                this.notificationService.openNotification(
                  'Ha ocurrido un error en el registro',
                  'error'
                );
                this.activeLogin();
              }
            );
          });
      } else {
        this.notificationService.openNotification(
          'Por favor rellene el formulario correctamente',
          'warning'
        );
      }
    } else {
      if (this.registerDocenteForm.valid) {
        let bodyUser = {
          username: this.registerDocenteForm.get('username').value,
          password: this.registerDocenteForm.get('password').value,
          email: this.registerDocenteForm.get('email').value,
        };
        let rol = 1;
        this.userService
          .createUser(bodyUser, rol)
          .subscribe((response: any) => {
            let bodyTeacher = {
              firstName: this.registerDocenteForm.get('firstname').value,
              lastName: this.registerDocenteForm.get('lastname').value,
              dni: this.registerDocenteForm.get('dni').value,
              depositNumber:
                this.registerDocenteForm.get('depositNumber').value,
              hourlyCost: Number(
                this.registerDocenteForm.get('hourlyCost').value
              ),
              address: {
                street: this.registerDocenteForm.get('street').value,
                city: this.registerDocenteForm.get('city').value,
                state: this.registerDocenteForm.get('state').value,
                country: this.registerDocenteForm.get('country').value,
                zipCode: this.registerDocenteForm.get('zipcode').value,
              },
            };
            let username = response.username;
            this.teacherService.createTeacher(bodyTeacher, username).subscribe(
              (response: any) => {
                this.notificationService.openNotification(
                  'Se ha registrado correctamente',
                  'success'
                );
                this.activeLogin();
              },
              (error) => {
                this.notificationService.openNotification(
                  'Ha ocurrido un error en el registro',
                  'error'
                );
                this.activeLogin();
              }
            );
          });
      } else {
        this.notificationService.openNotification(
          'Por favor rellene el formulario correctamente',
          'warning'
        );
      }
    }
  }
}
