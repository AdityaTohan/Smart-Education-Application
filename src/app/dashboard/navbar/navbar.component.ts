import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: '/profile' // Set the appropriate router link
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: '/settings' // Set the appropriate router link
    }
  ];
}

