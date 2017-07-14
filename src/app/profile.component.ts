import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DbService } from './service/db.service';
@Component({
  selector: 'app-profile',
  template: `
        <h3>User details</h3>
    <p>
      ID: {{user.id}} <br>
      Name: {{user.name}}<br>
      Student id: {{user.stuID}}<br>
      Email: {{user.email}}
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  user: any;
  id:number;
  constructor(private dbService: DbService, private route:ActivatedRoute) {
    
    this.subscription = route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.user= dbService.getdateOfUser(this.id);

      }        
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
