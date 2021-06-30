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
import { TutorshipComponent } from './core/tutorship/tutorship.component';
import { MembershipComponent } from './core/membership/membership.component';
import { ProfileComponent } from './core/profile/profile.component';
import { FavoriteComponent } from './core/favorite/favorite.component';
import { CreateTutotshipComponent } from './core/tutorship/create-tutotship/create-tutotship.component';
import { TutorshipIconComponent } from './core/tutorship/tutorship-icon/tutorship-icon.component';
import { BookingComponent } from './core/booking/booking.component';
import { CourseComponent } from './core/course/course.component';
import { ReportComponent } from './core/report/report.component';
import { CardComponent } from './core/card/card.component';
import { PaymentComponent } from './core/payment/payment.component';
import { StudentComponent } from './core/student/student.component';
import { CreateCourseComponent } from './core/course/create-course/create-course.component';
import { CreateReportComponent } from './core/report/create-report/create-report.component';
import { CreateBookingComponent } from './core/booking/create-booking/create-booking.component';
import { CreateCardComponent } from './core/card/create-card/create-card.component';
import { CreatePaymentComponent } from './core/payment/create-payment/create-payment.component';

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
    TutorshipComponent,
    MembershipComponent,
    ProfileComponent,
    FavoriteComponent,
    CreateTutotshipComponent,
    TutorshipIconComponent,
    BookingComponent,
    CourseComponent,
    CardComponent,
    PaymentComponent,
    ReportComponent,
    StudentComponent,
    CreateCourseComponent,
    CreateReportComponent,
    CreateBookingComponent,
    CreateCardComponent,
    CreatePaymentComponent,
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
