import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      This is Homepage! <br>
      Record number of Computer Science master degree students graduated from MUM in 2017.
      Please come and study here.
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
