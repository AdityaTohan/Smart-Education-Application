import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {

  constructor(private router: Router) {}


  teacher(){
    this.router.navigate(['/teacher-login']);
  }
  student(){
    this.router.navigate(['/login']);
  }
  parent(){
    this.router.navigate(['/dashboard']);
  }
}
