import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../nav-item.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() navItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
