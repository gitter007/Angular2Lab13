import { Component, OnInit } from '@angular/core';
import { DbService } from './service/db.service';

@Component({
  selector: 'app-students',
  template: `
    <ul>
        <li *ngFor="let item of items"><a [routerLink]="['profile',item.id]">{{item.name}}</a></li>
    </ul>
  `,
  styles: [`li { margin: 0; padding: 0;} `]
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
