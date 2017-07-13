import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DbService } from './service/db.service';
import {User} from './service/user';
@Component({
  selector: 'app-profile',
  template: `
    <p>
      {{user.id}}
      {{user.name}}
      {{user.name}}
      {{user.name}}
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
        this.user = dbService.getdateOfUser(this.id);

      }        
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
