import { Injectable, Inject } from '@angular/core';
import { PullRequest } from './pull-request';
import { MOCK_PULL_REQUESTS } from './mock-github-service-data';
import { Observable, of, from } from 'rxjs';
import * as Octokit from '@octokit/rest';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  readonly queryBasePr: string = `type:pr`;
  constructor(@Inject('octokit') public octokit: Octokit, @Inject('githubToken') public githubToken: string) {
    console.log(octokit);
    const authParams: Octokit.AuthUserToken = { type: 'token', token: githubToken };
    this.octokit.authenticate(authParams);
  }

  public getTeamPullRequests(organization: string, teamName: string): Observable<Octokit.Response<IssueSearchResult>> {
    const query = `{ queryBasePr }+team:{ organization }/{ teamName }`;
    const searchIssues: Octokit.SearchIssuesParams = { q: query };
    return from(this.octokit.search.issues(searchIssues));
  }
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: any[];
  state: string;
  locked: boolean;
  assignee?: any;
  assignees: any[];
  milestone?: any;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at?: any;
  author_association: string;
  pull_request: PullRequest;
  body: string;
  score: number;
}

export interface IssueSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: Issue[];
}
