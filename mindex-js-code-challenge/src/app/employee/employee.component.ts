//Bring in relevant components
import { Component, Input, OnInit } from '@angular/core';
//Bring in Employee components for properties from employee.ts (firstName,lastName, position, compensation)
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() allReports: number;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    //need to display the number of total number of direct and indirect employees
    //start with calling the function to grab the all of the employees
    this.getAllReports();
  }

  //function grab all the employees and push them to an array
  getAllReports(): void {
    //put into an array as done in employee-list component
    let employeeList: Employee[] = [];
    this.employeeService.getAll().subscribe(){
      //Need to push indirect employees to array to display on page
    
    }
  }
}
