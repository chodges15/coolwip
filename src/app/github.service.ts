import { Injectable, Inject, OnInit } from '@angular/core';
import { Observable, of, from, zip } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as Interfaces from './interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) {
  }

  public getPullRequests(username: String): Observable<Interfaces.IssueSearchResult> {
    return this.http.get<Interfaces.IssueSearchResult>(`/search/issues?q=type:pr+author:${username}`);
  }

  public getPullRequestsForUsers(users: string[]): Observable<Interfaces.IssueSearchResult>[] {
    const observableArray: Observable<Interfaces.IssueSearchResult>[] = [];
    if (users) {
      users = users.filter( val => val && val.length > 0);
      console.log(users);
      users.forEach(user => {
        console.log(`USER: {${user}}`);
        observableArray.push(this.getPullRequests(user));
      });
    }
    return observableArray;
  }
}
