import { Component, OnInit } from '@angular/core';
import { DbService } from './service/db.service';

@Component({
  selector: 'app-students',
  template: `
    <p>
      {{items}}
    </p>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
    value = '';
    items: string[] = [];
  constructor(private dbService: DbService) { 
        this.dbService.getData().forEach(element => {
        console.log(element);
        this.items.push(element.name);
      });
  }

  ngOnInit() {

  }

}
