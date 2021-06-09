import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Main } from './main.component';
import { LoginComponent } from './login/login.component';
import { DashboardTutorComponent } from './dashboard-tutor/dashboard-tutor.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';

@NgModule({
  declarations: [
    Main,
    LoginComponent,
    DashboardTutorComponent,
    DashboardStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Main]
})
export class AppModule { }
