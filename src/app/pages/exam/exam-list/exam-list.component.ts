import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private examService: ExamService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.examService.getExams().subscribe(data => this.exams = data);
    console.log(this.exams);
  }

  getExams(): void {
    this.examService.getExams()
      .subscribe(exams => this.exams = exams);
  }

  // call get url to delete
  deleteExam(id: number): void {
  this.examService.deleteExam(id);    
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }

  comingSoon() {
    this.openSnackBar("Funktion wird bald hinzugefügt ⏳")
  }

}
