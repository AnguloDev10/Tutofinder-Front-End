import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  Uri: string = `${environment.CustomerService}/oauth`;
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: '*/*',
    Authorization: 'Basic ' + btoa('tutofinder:tutorapp'),
  });

  logIn(data) {
    const body = new HttpParams({ fromObject: data });
    const options = { headers: this.headers };

    return this.http.post(`${this.Uri}/token`, body.toString(), options).pipe(
      map((response: any) => {
        localStorage.setItem('Email', response.Email);
        localStorage.setItem('Username', response.Username);
        const tokenSTR = response.access_token;
        localStorage.setItem('access_token', tokenSTR);
        const helper = new JwtHelperService();

        const decodedToken = helper.decodeToken(tokenSTR);

        localStorage.setItem('Rol', decodedToken.authorities[0]);
        this.router.navigateByUrl('/home').then(() => {
          this.notificationService.openNotification(
            'Bienvenido a Tutofinder',
            'warning'
          );
          window.location.reload();
        });
        return response;
      })
    );
  }
  logOut() {
    localStorage.removeItem('Email');
    localStorage.removeItem('Username');
    localStorage.removeItem('access_token');
    localStorage.removeItem('Rol');
    this.router.navigateByUrl('/').then(() => {
      this.notificationService.openNotification('Vuelva pronto', 'warning');
      window.location.reload();
    });
  }
  getRol() {
    return localStorage.getItem('Rol');
  }
}
