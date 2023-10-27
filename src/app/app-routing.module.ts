import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./signin/login/login.component";
import {HomeComponent} from "./dashboard/home/home.component";
import {AnnouncementsComponent} from "./dashboard/announcements/announcements.component";
import {FeedbackComponent} from "./dashboard/feedback/feedback.component";
import {GradesComponent} from "./dashboard/grades/grades.component";
import {MeetTeachersComponent} from "./dashboard/meet-teachers/meet-teachers.component";
import {SelectionComponent} from "./selection/selection.component";
import {TeacherLoginComponent} from "./signin/teacher-login/teacher-login.component";
import {TeacherDashboardComponent} from "./teacher-dashboard/teacher-dashboard.component";
import {AnnouncementCreationComponent} from "./teacher-dashboard/announcement-creation/announcement-creation.component";
import {ContentCreationComponent} from "./teacher-dashboard/view-content/content-creation.component";
import {CreateQuizComponent} from "./teacher-dashboard/create-quiz/create-quiz.component";
import {TeacherParentComponent} from "./teacher-dashboard/feedback/teacher-parent/teacher-parent.component";
import {TeacherStudentComponent} from "./teacher-dashboard/feedback/teacher-student/teacher-student.component";
import {
  TeacherParentMeetComponent
} from "./teacher-dashboard/meeting/teacher-parent-meet/teacher-parent-meet.component";
import {
  TeacherStudentMeetComponent
} from "./teacher-dashboard/meeting/teacher-student-meet/teacher-student-meet.component";
import {UploadContentComponent} from "./teacher-dashboard/upload-content/upload-content.component";
import {ViewStudentComponent} from "./teacher-dashboard/view-student/view-student.component";


const routes: Routes = [
  { path: '', redirectTo: 'selection', pathMatch: 'full' },
  { path: 'selection', component: SelectionComponent},
  { path: 'login', component: LoginComponent},
  { path: 'teacher-login', component: TeacherLoginComponent},

  { path: 'dashboard',component: DashboardComponent },
  { path: 'content', component: HomeComponent},
  { path: 'announcements', component: AnnouncementsComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'grades', component: GradesComponent},
  { path: 'meet-teachers', component: MeetTeachersComponent},

  { path: 'teacher-dashboard',component: TeacherDashboardComponent },
  { path: 'content', component: AnnouncementCreationComponent},
  { path: 'view-content', component: ContentCreationComponent },
  { path: 'create-quiz', component: CreateQuizComponent},
  { path: 'upload-content', component: UploadContentComponent},
  { path: 'parent-feedback', component: TeacherParentComponent},
  { path: 'student-feedback', component: TeacherStudentComponent},
  { path: 'meet-student', component: TeacherParentMeetComponent},
  { path: 'meet-parent', component: TeacherStudentMeetComponent},
  { path: 'view-student', component: ViewStudentComponent},
  { path: 'announcements-creation', component: AnnouncementCreationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
