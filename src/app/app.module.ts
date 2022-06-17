import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MaterialModule } from './material.module';
import { AboutComponent } from './pages/about/about.component';
import { LogoComponent } from './ui/logos/logo/logo.component';
import { ExamListComponent } from './pages/exam/exam-list/exam-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PLogoComponent } from './ui/logos/p-logo/p-logo.component';
import { HttpClientModule } from '@angular/common/http';
import { AddExamComponent } from './pages/exam/add-exam/add-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LogoComponent,
    ExamListComponent,
    DashboardComponent,
    PLogoComponent,
    AddExamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
