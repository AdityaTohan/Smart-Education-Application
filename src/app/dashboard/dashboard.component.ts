// dashboard.component.ts

import {Component, Input} from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  pageId: string = ""
  @Input() paths: { label: string, path: string, id: string }[] = [];

  constructor() {
    this.paths = [
      {label: 'Course Content',id: 'content', path: '/content'},
      {label: 'Grades/Progress',id:'grades', path: '/grades'},
      {label: 'Feedback',id:'feedback', path: '/feedback'},
      {label: 'Meet with Teachers',id:'meetTeachers', path: '/meet-teachers'},
      {label: 'Announcements',id:'announcements', path: '/announcements'}
    ];
  }
onClick(id:string){
    console.log(id)
    this.pageId=id
}

}
