import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardStudentComponent } from './core/dashboard-student/dashboard-student.component';
import { HomeComponent } from './core/home/home.component';
import { MembershipComponent } from './core/membership/membership.component';
import { ProfileComponent } from './core/profile/profile.component';
import { TutorshipComponent } from './core/tutorship/tutorship.component';
import { FavoriteComponent } from './core/favorite/favorite.component';
import { CourseComponent } from './core/course/course.component';
import { ReportComponent } from './core/report/report.component';
import { BookingComponent } from './core/booking/booking.component';
import { CardComponent } from './core/card/card.component';
import { PaymentComponent } from './core/payment/payment.component';
import { StudentComponent } from './core/student/student.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { appbar: false } },
  { path: 'home', component: HomeComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'course', component: CourseComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'report', component: ReportComponent },
  { path: 'card', component: CardComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'tutorship', component: TutorshipComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'student', component: StudentComponent },

  /* {
    path: 'login',
    component: LoginComponent,
    data: { appbar: false },
  },
  { path: 'dashboardStudent', component: DashboardStudentComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
