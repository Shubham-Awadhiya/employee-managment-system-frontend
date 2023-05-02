import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../sevice/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id!: number;
  employee!: Employee;
 
  
  constructor(private service :EmployeeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getEmployee(this.id).subscribe(data=>{
      this.employee=data;
      
    }, error => console.log(error));
  }
  updateEmployee() {
    this.service.updateEmployee(this.id,this.employee)
      .subscribe(data => {
        console.log(data);
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

    gotoList(){
      this.router.navigate(['../view']);
    }
}
