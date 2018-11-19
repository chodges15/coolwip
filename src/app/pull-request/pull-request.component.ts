import { Component, OnInit } from '@angular/core';
import { PullRequest, PullRequestState } from '../pull-request';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.css']
})
export class PullRequestComponent implements OnInit {

  pullRequest: PullRequest = { name: 'test-pr',
                                        id: 35,
                           author: 'chodges15',
                  state: PullRequestState.Open,
                            repository: 'repo',
                            organization: 'org'};
  name: String;

  constructor(public organization: String) {
    this.name = organization;
  }

  ngOnInit() {
  }

}
