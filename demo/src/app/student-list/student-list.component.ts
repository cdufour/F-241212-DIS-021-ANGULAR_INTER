import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  studentService: StudentService | null = null;

  constructor() {
    this.studentService = new StudentService();
    console.log(this.studentService.example);
  }

}
