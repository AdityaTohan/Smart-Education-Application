import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import {ButtonModule} from "primeng/button";
import {InputMaskModule} from "primeng/inputmask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {HttpClientModule} from "@angular/common/http";
import {SpeedDialModule} from "primeng/speeddial";
import {DividerModule} from "primeng/divider";
import {PasswordModule} from "primeng/password";
import { LoginComponent } from './signin/login/login.component';
import { AnnouncementsComponent } from './dashboard/announcements/announcements.component';
import { HomeComponent } from './dashboard/home/home.component';
import {ScrollPanelModule} from "primeng/scrollpanel";
import { GradesComponent } from './dashboard/grades/grades.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { MeetTeachersComponent } from './dashboard/meet-teachers/meet-teachers.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { SelectionComponent } from './selection/selection.component';
import { TeacherLoginComponent } from './signin/teacher-login/teacher-login.component';
import { ContentCreationComponent } from './teacher-dashboard/view-content/content-creation.component';
import { UploadContentComponent } from './teacher-dashboard/upload-content/upload-content.component';
import { CreateQuizComponent } from './teacher-dashboard/create-quiz/create-quiz.component';
import { ViewStudentComponent } from './teacher-dashboard/view-student/view-student.component';
import { TeacherStudentComponent } from './teacher-dashboard/feedback/teacher-student/teacher-student.component';
import { TeacherParentComponent } from './teacher-dashboard/feedback/teacher-parent/teacher-parent.component';
import { TeacherStudentMeetComponent } from './teacher-dashboard/meeting/teacher-student-meet/teacher-student-meet.component';
import { TeacherParentMeetComponent } from './teacher-dashboard/meeting/teacher-parent-meet/teacher-parent-meet.component';
import { AnnouncementCreationComponent } from './teacher-dashboard/announcement-creation/announcement-creation.component';
import {FileUploadModule} from "primeng/fileupload";





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AnnouncementsComponent,
    HomeComponent,
    GradesComponent,
    FeedbackComponent,
    TeacherDashboardComponent,
    MeetTeachersComponent,
    WelcomeComponent,
    SelectionComponent,
    TeacherLoginComponent,
    ContentCreationComponent,
    UploadContentComponent,
    CreateQuizComponent,
    ViewStudentComponent,
    TeacherStudentComponent,
    TeacherParentComponent,
    TeacherStudentMeetComponent,
    TeacherParentMeetComponent,
    AnnouncementCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputMaskModule,
    FormsModule,
    InputTextModule,
    RippleModule,
    ToolbarModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    DividerModule,
    SpeedDialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenubarModule,
    CardModule,
    ScrollPanelModule,
    FileUploadModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
