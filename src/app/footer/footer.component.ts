import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  logo: string = "assets/logo-white.png"; 

  name: string = "Emilia Ioana Truta"

  simpleLinks: string[] = [
    'Privacy',
    'Terms',
    'Languages'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
