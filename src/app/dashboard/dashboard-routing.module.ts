import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './templates/login/login.component';
import { SignupComponent } from './templates/signup/signup.component';
import { ViewComponent } from './templates/view/view.component';
import { UpdateComponent } from './templates/update/update.component';
import { EmployeeDetailsComponent } from './templates/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'view', component: ViewComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
