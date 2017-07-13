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
// import { RouteComponent } from './params/route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    // RouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
