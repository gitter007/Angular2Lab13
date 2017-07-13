import { Component, OnInit } from '@angular/core';
import { DbService } from './service/db.service';

@Component({
  selector: 'app-students',
  template: `
    <ul>
        <li *ngFor="let item of items">{{item.name}}</li>
    </ul>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
    value = '';
    items: any[] = [];
  constructor(private dbService: DbService) { 

  }

  ngOnInit() {
        this.dbService.getData().forEach(element => {
       // console.log(element);
        this.items.push(element);
      });
  }

}
