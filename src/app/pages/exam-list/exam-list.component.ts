import { Component, OnInit } from '@angular/core';
import { ExamModel } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  exams: ExamModel[] = [];

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.getExams();
    console.log(this.exams);
  }

  getExams(): void {
    this.examService.getExams()
      .subscribe(exams => this.exams = exams);
  }

  printDateInfo(date: Date, printTime?: boolean | false): string {
    var timeInfo = printTime ? ' um ' + date.toLocaleTimeString('de-DE') : '';
    return date.toLocaleDateString('de-DE') + timeInfo;
  }

}
