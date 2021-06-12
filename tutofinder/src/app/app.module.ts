import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { AngularMaterialModule } from './core/material/material.module';
import { NotificationComponent } from './shared/notification/notification.component';
import { AppbarComponent } from './shared/appbar/appbar.component';
import { MenuItemComponent } from './core/home/menu-item/menu-item.component';
import { LeftSideNavComponent } from './shared/left-side-nav/left-side-nav.component';
import { DashboardStudentComponent } from './core/dashboard-student/dashboard-student.component';
import { LoginFormComponent } from './core/login/login-form/login-form.component';
import { RegisterFormComponent } from './core/login/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotificationComponent,
    AppbarComponent,
    MenuItemComponent,
    LeftSideNavComponent,
    DashboardStudentComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
