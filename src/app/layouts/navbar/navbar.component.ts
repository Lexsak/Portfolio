import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface navLinks {
  anchor: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('2000ms', style({ opacity: 1 }))]),
    ]),
  ],
})
export class NavbarComponent {
  navLinks: navLinks[] = [
    { anchor: '#home', text: 'Home' },
    { anchor: '#about', text: 'About' },
    { anchor: '#projects', text: 'Projects' },
    { anchor: '#contact', text: 'Contact' },
  ];

  isActive: boolean = false;

  closeMenu() {
    this.isActive = false;
  }

  openMenu() {
    this.isActive = true;
  }

  
}
