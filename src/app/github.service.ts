import { Injectable } from '@angular/core';
import { PullRequest } from './pull-request';
import { Observable, of } from 'rxjs';
import { MOCK_PULL_REQUESTS } from "./mock-pull-requests"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }

  getPullRequests(organization: String, users: String): Observable<PullRequest[]> {
    console.log("Fetching pull requests")
    return of(MOCK_PULL_REQUESTS);
  }
}
