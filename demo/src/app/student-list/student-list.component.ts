import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { CommonModule } from '@angular/common';

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
    this.students = this.studentService.getStudentsSync();
  }

}
