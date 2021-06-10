import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { DashboardStudentComponent } from './core/dashboard-student/dashboard-student.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    data: { appbar: false },
  },
  { path: 'dashboardStudent', component: DashboardStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
