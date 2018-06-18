import {Component, Input, OnInit} from '@angular/core';

import {Employee} from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() numberOfReports: number;
  //where do I get the actual number of direct reports?
  constructor() {
  }

  ngOnInit(){
    
  }
}
