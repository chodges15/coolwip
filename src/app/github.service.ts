import { Injectable } from '@angular/core';
import { PullRequest } from './pull-request';
import { MOCK_PULL_REQUESTS } from './mock-pull-requests'
import { Observable, of } from 'rxjs';
import * as Octokit from '@octokit/rest';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }

  getPullRequests(organization: String, user: String): Observable<PullRequest[]> {
    console.log("Fetching pull requests")
    return of(MOCK_PULL_REQUESTS);
  }
}
