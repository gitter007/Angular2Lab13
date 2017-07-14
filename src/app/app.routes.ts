import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students.component";
import { ProfileComponent } from "./profile.component";
import { ProfileGuardService } from "./profile-guard.service";
import {ErrorComponent} from './error.component';

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StudentsComponent },
     { path: 'students/profile/:id', component: ProfileComponent, canActivate: [ProfileGuardService]},
     { path: '**',component: ErrorComponent }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
