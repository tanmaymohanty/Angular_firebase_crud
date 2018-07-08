import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private employeeService : EmployeeService, private toastr: ToastrService) { } 

  ngOnInit() {
    
   // this.resetForm();

  }
  
  onSubmit(employeeFrom :NgForm){
    
    if(employeeFrom.value.$key == null){
      this.employeeService.insertEmployee(employeeFrom.value);
      this.resetForm(employeeFrom);
      this.toastr.success('Submitted Succcessfuly!', 'Employee Resgister!');
     
    }
    
    else{
      this.employeeService.updateEmployee(employeeFrom.value);
      this.resetForm(employeeFrom);
              
      this.toastr.warning('Update Succcessfuly!', 'Employee Resgister!');
    }

    
  }
  resetForm(employeeFrom :NgForm){
    if(employeeFrom !=null ){

      employeeFrom.reset();

      this.employeeService.selectedEmployee ={
  
        $key : null,
        name : '',
        postion : '',
        office : '',
        salary : 0
  
      }

    }
     
  }
}
