import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router, } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { Injectable, OnDestroy } from '@angular/core';
import { DbService } from './service/db.service';

@Injectable()
export class ProfileGuardService implements CanActivate{
    constructor(private dbService: DbService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.dbService.getDataOfUser(route.params['id'])) {
                return true;
        }
        this.route.navigate(['error']);
        return false;
    }
    ngOnDestroy() {
    }

}
