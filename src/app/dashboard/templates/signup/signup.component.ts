import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../sevice/signup.service';
import { Router } from '@angular/router';
import { Employee } from '../../interface/employee';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  empName!: string;
  password!: string;
  requestMap = new Map<string, string>();
  employee!: {};
  constructor(private service: SignupService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.empName);
  }
  onSubmit() {

    console.log(this.empName);
    this.requestMap.set("empName", this.empName);
    this.requestMap.set("password", this.password);

    this.employee={
      "empName":this.empName,
      "password": this.password
    }
    
    console.log(this.requestMap);

    this.service.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    })
    this.gotoLogin();
  }

  gotoLogin() {
    this.router.navigate(['../login']);
  }
}
