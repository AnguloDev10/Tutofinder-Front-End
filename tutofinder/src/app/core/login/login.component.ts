import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  hide1 = true;
  username = 'student@gmail.com';
  name = 'Jhon Student';
  password = 'demopassword';
  companyId = null;
  userId = null;
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
  image =
    'https://idc.brightspotcdn.com/dims4/default/387d311/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fidc.brightspotcdn.com%2Fc2%2Fdf%2F657f01ef4114b74d063b2618b68b%2Fadobestock-336831758.jpeg';
  ngOnInit(): void {
    console.log(this.image);
  }
  myStyle(): object {
    return { 'background-image': `${this.background + ',url(' + this.image}` };
  }
  login() {
    // localStorage.setItem('firstName', this.name);
    this.router.navigateByUrl('/dashboardStudent');
  }
  getUsername(event: any) {
    // without type info
    this.username = event.target.value;
  }
  getPassword(event: any) {
    // without type info
    this.password = event.target.value;
  }
  redirectTo(url) {
    window.open(url);
  }
}
