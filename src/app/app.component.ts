import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title: string;
  authenticated = false;

  constructor(private app: AppService) {
    this.title = 'Welfare Team - Mood Reporting';
    this.authenticated = this.app.authenticated;
  }
}
