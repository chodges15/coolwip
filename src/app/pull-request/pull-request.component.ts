import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';
import * as Interfaces from '../interfaces';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.css']
})
export class PullRequestComponent implements OnInit {

  issues: Interfaces.Issue[];
  currentSelectedIssue: Interfaces.Issue;
  theMap: Map<number, Interfaces.Issue>;
  users: string[];

  public setUsersAndFetchPullRequests(users: string[]) : boolean {
    if(users)
    {
      this.users = users.filter( val => val && val.length > 0);
      console.log(this.users)
      this.users.forEach(user => {
        console.log(`USER: {${user}}`)
        this.githubService.getPullRequests(user).subscribe(
          results => { if(results && results.items) {
            this.parseResults(results)
          }},
          err => console.log(`There was an error fetching pull requests: ${err}`));
      });
      return true;
    }
    return false;
  }

  private parseResults(results: Interfaces.IssueSearchResult) {
    for (const issue of results.items) {
      this.theMap.set(issue.id, issue);
    }
  }

  constructor(private githubService: GithubService) {
    this.theMap = new Map<number, Interfaces.Issue>();
  }

  ngOnInit() {
  }

}
