import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './templates/login/login.component';
import { SignupComponent } from './templates/signup/signup.component';
import { ViewComponent } from './templates/view/view.component';
import { HeaderComponent } from './templates/header/header.component';
import { UpdateComponent } from './templates/update/update.component';
import { EmployeeDetailsComponent } from './templates/employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ViewComponent,
    HeaderComponent,
    UpdateComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
