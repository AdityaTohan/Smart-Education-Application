import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./signin/login/login.component";
import {SignupComponent} from "./signin/signup/signup.component";
import {HomeComponent} from "./dashboard/home/home.component";
import {AnnouncementsComponent} from "./dashboard/announcements/announcements.component";
import {FeedbackComponent} from "./dashboard/feedback/feedback.component";
import {GradesComponent} from "./dashboard/grades/grades.component";
import {MeetTeachersComponent} from "./dashboard/meet-teachers/meet-teachers.component";


const routes: Routes = [
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'content', component: HomeComponent},
  { path: 'announcements', component: AnnouncementsComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'grades', component: GradesComponent},
  { path: 'meet-teachers', component: MeetTeachersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
