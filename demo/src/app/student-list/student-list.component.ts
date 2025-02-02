import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  //private studentService: StudentService | null = null;
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    //this.studentService = new StudentService();
    //console.log(this.studentService.example);
  }

  ngOnInit(): void {
    //this.students = this.studentService.getStudentsSync();
    
    /*
    // approche "native", bas niveau
    fetch('http://localhost:3000/students')
      .then(res => res.json())
      .then(students => this.students = students)
    */

      // this.studentService.getStudents()
      //   .then(res => res.json())
      //   .then(students => this.students = students)

      this.studentService
        .getStudents()
          .pipe(
            tap(x => console.log(x[0]))
          )
          .subscribe(students => this.students = students)
  }

}
