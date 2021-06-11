import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './core/login/login.component';
//import {  } from './core/authentication/authentication.component';
import { DashboardStudentComponent } from './core/dashboard-student/dashboard-student.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { appbar: false }},
  { path: 'home', component: HomeComponent },
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
