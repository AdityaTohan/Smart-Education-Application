// teacher-dashboard.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent {
  pageId: string = ""
  menuItems = [
    {
      id: 'course-view-content',
      title: 'Course Content Creation',
      subItems: [
        { id: 'upload-content', title: 'Upload content' },
        { id: 'view-content', title: 'View content' },
        { id: 'create-quiz', title: 'Create Quiz' }
      ],
      showSubItems: false
    },
    {
      id: 'view-student',
      title: 'View Student',
      subItems: [],
      showSubItems: false
    },
    {
      id:'feedback',
      title: 'Feedback',
      subItems: [
        { id: 'student-feedback', title: 'Student feedback' },
        { id: 'parent-feedback', title: 'Parent feedback' }
      ],
      showSubItems: false
    },
    {
      id:'meeting',
      title: 'Meeting',
      subItems: [
        { id: 'meet-student', title: 'Meet with Student' },
        { id: 'meet-parent', title: 'Meet with Parent' }
      ],
      showSubItems: false
    },
    {
      id: 'announcements',
      title: 'Announcements',
      subItems: [],
      showSubItems: false
    }
  ];

  toggleSubItems(index: number): void {
    this.menuItems[index].showSubItems = !this.menuItems[index].showSubItems;
  }
  onClick(id:string){
    console.log(id)
    this.pageId=id
  }
}
