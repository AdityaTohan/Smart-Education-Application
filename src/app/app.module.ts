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
import { SignupComponent } from './signin/signup/signup.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { AnnouncementsComponent } from './dashboard/announcements/announcements.component';
import { HomeComponent } from './dashboard/home/home.component';
import {ScrollPanelModule} from "primeng/scrollpanel";
import { GradesComponent } from './dashboard/grades/grades.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { MeetingComponent } from './meeting/meeting.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AnnouncementsComponent,
    HomeComponent,
    GradesComponent,
    FeedbackComponent,
    MeetingComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
