import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as Interfaces from '../interfaces';

@Component({
  selector: 'app-pull-request-table',
  templateUrl: './pull-request-table.component.html',
  styleUrls: ['./pull-request-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class PullRequestTableComponent implements OnInit {
  dataSource = ['temp'];
  columnsToDisplay = ['pull request', 'state', 'organization', 'name'];
  expandedElement: Interfaces.PullRequest | null;

  constructor() { }

  ngOnInit() {
  }

}
