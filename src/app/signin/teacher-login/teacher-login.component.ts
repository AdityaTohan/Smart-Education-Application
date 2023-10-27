import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent {
  userName: string = '';
  studentID: string= '';
  constructor(private router: Router) {}
  login() {
    if (this.userName && this.studentID) {
      // Perform your login logic here
    }
  }
  onClick(){
    this.router.navigate(['/dashboard']);
  }

}
