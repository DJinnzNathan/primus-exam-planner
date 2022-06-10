import { Component, OnInit } from '@angular/core';
import { ExamModel } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  LEVELS: string[] = ["A1", "A2", "B1", "B2", "C1", "C1 HS", "C2"];

  exams: ExamModel[] = [];

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.examService.getExams().subscribe(data => this.exams = data);
    console.log(this.exams);
  }

  getExams(): void {
    this.examService.getExams()
      .subscribe(exams => this.exams = exams);
  }

}
