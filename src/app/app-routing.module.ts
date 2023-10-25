import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./signin/login/login.component";
import {SignupComponent} from "./signin/signup/signup.component";
import {NavbarComponent} from "./dashboard/navbar/navbar.component";
import {HomeComponent} from "./dashboard/home/home.component";
import {AnnouncementsComponent} from "./dashboard/announcements/announcements.component";


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'navbar', component: NavbarComponent, outlet: 'header' },
  { path: 'home', component: HomeComponent, outlet: 'primary' },
  { path: 'announcement', component: AnnouncementsComponent, outlet: 'sidebar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
