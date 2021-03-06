import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../nav-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() navItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
