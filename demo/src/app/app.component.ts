import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ExosModule } from './exos/exos.module';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ChoiceComponent } from './choice/choice.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule, 
    ChildComponent, 
    ExosModule, 
    StudentsComponent,
    StudentListComponent,
    ChoiceComponent,
    StudentFormComponent,
    SwitchExampleComponent,
    CustomCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'demo';
  year: number = 2024;
  isOk: boolean = false;
  students: string[] = ['Chris', 'Jordan', 'Anthony'];
 
  onClick() {
    console.log('click');
    this.year += 1;
    this.isOk = !this.isOk;
  }
}
