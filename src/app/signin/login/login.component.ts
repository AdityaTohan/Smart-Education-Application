import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userName: string = '';
  studentID: string= '';

  login() {
    if (this.userName && this.studentID) {
      // Perform your login logic here
    }
  }
}
