import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/home/home.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { RegisterComponent } from './core/authentication/register/register.component';
import { AngularMaterialModule } from './core/material/material.module';
import { NotificationComponent } from './shared/notification/notification.component';
import { AppbarComponent } from './shared/appbar/appbar.component';
import { MenuItemComponent } from './core/home/menu-item/menu-item.component';
import { LeftSideNavComponent } from './shared/left-side-nav/left-side-nav.component';
import { DashboardStudentComponent } from './core/dashboard-student/dashboard-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent,
    AppbarComponent,
    MenuItemComponent,
    LeftSideNavComponent,
    DashboardStudentComponent,
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
