import { Component } from '@angular/core';
import { Student } from '../student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [
    { name: "Chris", grade: 2 },
    { name: "Jordan", grade: 15 },
    { name: "Anthony", grade: 19 },
  ];

  objStyle: any = {
    color: 'green',
    fontSize: '30pt' 
  };

  objStyle2: any = {
    fontSize: '40pt',
    fontWeight: 'bold',
    textDecoration: 'underline' 
  };

  objClass: any = {
    winner: true,
    loser: false
  };

  constructor() {
    setTimeout(() => {
      // this.objStyle.fontSize = '12pt';
      // this.objStyle.color = '#ff5533';
      // this.objStyle = this.objStyle2;
      
      // fusion d'objets par spread operator (ES6)
      //let mergeProps = { ...this.objStyle, ...this.objStyle2 };
      //this.objStyle = mergeProps;
      this.students[0].grade = 16;
      this.objClass = { winner: false, loser: true };
    }, 4000)
  }
}
