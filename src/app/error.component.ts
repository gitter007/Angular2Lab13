import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      Sorry, Page not found in Error . 
    </p>
    <a [routerLink] = "['/']">Go back Home</a>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
