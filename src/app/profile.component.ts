import { Component, OnInit } from '@angular/core';
import { DbService } from './service/db.service';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      profile Works!
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

}
