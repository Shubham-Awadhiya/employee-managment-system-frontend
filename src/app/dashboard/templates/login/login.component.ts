import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../sevice/login.service';
import { Router } from '@angular/router';
import { Employee } from '../../interface/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  empName!: string;
  password!: string;
  requestMap = new Map<string, string>();
  
  employee!:{};
  islogin = false;
  isAdmin = false;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    this.requestMap.set("empName", this.empName);
    this.requestMap.set("password", this.password);

    this.employee={
      "empName":this.empName,
      "password": this.password
    }
    
    console.log(this.employee);

    this.service.login(this.employee).subscribe(data => {
      console.log(data);
      if(data="'Employee Login Successfully ..!'"){
        this.gotoList();
      }else{
        this.router.navigate(['../login']);
      }
    });
    
  }
  gotoList() {
    this.router.navigate(['../view']);
  }
}
