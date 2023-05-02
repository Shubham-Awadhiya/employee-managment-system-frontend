import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../sevice/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../interface/employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  employees:Employee[]=[]
  
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.service.getEmployeesList().subscribe(data=>{
      this.employees=data;
      console.log(data);
      
    },error => console.log(error))
  }
  deleteEmployee(id: number) {
    this.service.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['view']);
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
  employeeUpdate(id:number){
    this.router.navigate(['update', id]);
  }
}