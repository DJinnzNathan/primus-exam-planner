import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExamModel } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {


  EXAMS = [
    {
        id: 1,
        name: 'Exam 1',
        date: new Date(2022, 4, 20),
        createdAt: new Date(),
        updatedAt: new Date(),
        examinationOfficer: 'Nathaniel'
    },
    {
        id: 2,
        name: 'Exam 2',
        date: new Date(2022, 4, 21),
        createdAt: new Date(),
        updatedAt: new Date(),
        examinationOfficer: 'Nathan'
    }
];

  constructor(private http: HttpClient) {}

  getExams(): Observable<ExamModel[]> {
    return this.http.get<ExamModel[]>('http://localhost:8080/api/exams/');
  }

  // getExam(id: number): Observable<ExamModel> {
  //   var exam: ExamModel[] = this.EXAMS.filter(a => a.id === id);
  //   return of(exam[0]);
  // }

  test() {
    let exams = this.http.get<ExamModel[]>('http://localhost:8080/api/exams/');
    console.log("Testmethode:");
    exams.subscribe(data => console.log(data));

  }
}