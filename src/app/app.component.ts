import { Component } from '@angular/core';
import { DbService } from './service/db.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.active { color:#fff; background-color:#f44336; border-radius:32px; padding: 5px 10px; }'],
   providers: [DbService]
})
export class AppComponent {
  title = 'Angular 2 Lab13';
}
