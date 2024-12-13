import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  example: string = 'Example';

  private students: Student[] = [
    { name: "Chris", grade: 2 },
    { name: "Jordan", grade: 15 },
    { name: "Anthony", grade: 19 },
  ];
  
  constructor() { }

  getStudentsSync(): Student[] {
    return this.students;
  }

}
