import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Import our Routes file
import { myRoutes } from "./app.routes";
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { ErrorComponent } from './error.component';
import { ProfileGuardService } from "./profile-guard.service";
import { DbService } from './service/db.service';

// import { RouteComponent } from './params/route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
    // RouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports
  ],
  providers: [DbService,ProfileGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
