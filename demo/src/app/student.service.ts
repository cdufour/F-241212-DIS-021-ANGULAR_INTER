import { Inject, Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from './app.config';

//const API = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  example: string = 'Example';

  private students: Student[] = [
    { name: "Chris", grade: 2 },
    { name: "Jordan", grade: 15 },
    { name: "Anthony", grade: 19 },
  ];
  
  constructor(
    private httpClient: HttpClient,
    @Inject(API) private api: string
  ) { }

  getStudentsSync(): Student[] {
    return this.students;
  }

  getStudents(): Observable<Student[]> {
    //this.httpClient.get(API);
    //return fetch('http://localhost:3000/students');

    // retourne un Observable (de tableau d'étudiants)
    return this.httpClient.get<Student[]>(this.api);                    
  }

}
