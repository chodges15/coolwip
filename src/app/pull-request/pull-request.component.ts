import { Component, OnInit } from '@angular/core';
import { PullRequest, PullRequestState } from '../pull-request';
import { GithubService } from '../github.service'

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
  pullRequests: PullRequest[];

  getPullRequests()
  {
    this.users.forEach(user => {
      this.githubService.getPullRequests(this.organization, user)
    }); 
  }

  constructor(private githubService: GithubService, public organization: String, public users: String[]) {
  }

  ngOnInit() {
    this.getPullRequests();
  }

}
