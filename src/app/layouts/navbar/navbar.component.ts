import { Component, HostListener } from '@angular/core';

interface navLinks {
  anchor: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navLinks: navLinks[] = [
    { anchor: '#home', text: 'Home' },
    { anchor: '#about', text: 'About' },
    { anchor: '#projects', text: 'Projects' },
    { anchor: '#contact', text: 'Contact' },
  ];
}
