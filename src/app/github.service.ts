import { Injectable, Inject, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
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
}
