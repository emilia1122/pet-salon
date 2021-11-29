import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  logo: string = "assets/pet-salon-logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
