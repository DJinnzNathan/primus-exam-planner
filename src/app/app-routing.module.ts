import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExamListComponent } from './pages/exam-list/exam-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exam-list', component: ExamListComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/exam-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
