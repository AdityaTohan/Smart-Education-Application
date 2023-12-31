import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

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
