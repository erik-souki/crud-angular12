import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
// Replace 'path/to/student.model' with the actual path to the Student model file

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    {_id: "1", name: 'Angular', ra:'123456'}
  ]; // Add the type annotation for the students array
  displayedColumns = ['name','ra'];

  constructor() {}

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
 //   this.students = [
  //    {_id:'2', name: 'Alice', ra: '12345' },
    //  { _id:'3', name: 'Bob', ra: '54321' }
    //];
  }

}
