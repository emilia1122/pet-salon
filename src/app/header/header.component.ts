import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavItem } from './nav-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems: NavItem[] = [
    {
      name: 'Home',
      route: 'home',
    },
    {
      name: 'About us',
      route: 'about-us',
    },
    {
      name: 'Services',
      route: 'services',
    },
    {
      name: 'Gallery',
      route: 'gallery',
    },
    {
      name: 'Contact us',
      route: 'contact-us',
    }
  ];

  constructor() { }
  ngOnInit() {
  }



}
