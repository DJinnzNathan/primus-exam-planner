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
        examDate: new Date(2022, 4, 20),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        examDate: new Date(2022, 4, 21),
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

  constructor() { }

  getExams(): Observable<ExamModel[]> {
    var exams: ExamModel[] = this.EXAMS;
    return of(exams);
  }

  getExam(id: number): Observable<ExamModel> {
    var exam: ExamModel[] = this.EXAMS.filter(a => a.id === id);
    return of(exam[0]);
  }
}