//Bring in relevant components
import { Component, Input, OnInit } from '@angular/core';
//Bring in Employee components for properties from employee.ts (firstName,lastName, position, compensation)
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { directiveCreate } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() allReports: number;
  public total: number = 0;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    //need to display the number of total number of direct and indirect employees
    //start with calling the function to grab the all of the employees
    this.getAllReports();
  }
  //function to grab all the employees and push them to an array
  getAllReports(): void {
    //put into an array as done in employee-list component
    let emp = this.employee;

    // console.log(emp);
    // console.log("works");

    //Need to check if each employee has a direct report. If they don't use return to leave function
    if (!emp.directReports) {
      return
    }
    console.log(emp)
    //query the get request by id

    //for infinite children need to recusively get indirect reports using a function
    let getIndirectReports = (id) => {
      this.employeeService.get(id).subscribe(childEmp => {
        if (!childEmp.directReports) {
          return
        }
        //Need to get length of array for indirect employees
        this.total += childEmp.directReports.length
        childEmp.directReports.forEach(id => {
          getIndirectReports(id);
        })
        console.log(childEmp);
      })
    }

    emp.directReports.forEach(id => {
      //Going through all direct reports of person we are mapping to get their indirect reports
      getIndirectReports(id);
      this.total++
    })
  }
}
