import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  slides = [
    {
      video: 'https://youtu.be/D0zYJ1RQ-fs'
    },
    {
      video: 'https://youtu.be/1roy4o4tqQM'
    },
    {
      video: 'https://youtu.be/bILE5BEyhdo'
    },
    {
      video: 'https://youtu.be/uBYORdr_TY8'
    }
  ];
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
