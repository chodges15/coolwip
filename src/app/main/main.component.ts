import { Component } from '@angular/core';
import { PullRequestTableComponent } from '../pull-request-table/pull-request-table.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  openPrTable: PullRequestTableComponent;
  constructor() {
    this.openPrTable = new PullRequestTableComponent();
  }
}
