import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../sevice/employee.service';
import { Employee } from '../../interface/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee!: Employee;
  
  constructor(private service: EmployeeService, private router:Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getEmployee(this.id).subscribe(data => {
      this.employee = data;
      
    }, error => console.log(error))
  }

  list(){
    this.router.navigate(['view']);
  }
}
