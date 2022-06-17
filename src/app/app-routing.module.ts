import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddExamComponent } from './pages/exam/add-exam/add-exam.component';
import { ExamListComponent } from './pages/exam/exam-list/exam-list.component';
import { RoomListComponent } from './pages/room/room-list/room-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exam-list', component: ExamListComponent },
  { path: 'add-exam', component: AddExamComponent },
  { path: 'room-list', component: RoomListComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
