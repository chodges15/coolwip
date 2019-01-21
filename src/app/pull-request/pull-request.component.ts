import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import * as Interfaces from '../interfaces';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.css']
})
export class PullRequestComponent implements OnInit {

  issue: Interfaces.Issue[];

  getPullRequests(users: string[]) {
    users.forEach(user => {
      this.githubService.getPullRequests(user);
    });
  }

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
  }

}
