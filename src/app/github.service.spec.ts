import { TestBed } from '@angular/core/testing';
import { GithubService, IssueSearchResult } from './github.service';
import { tokenKey } from '@angular/core/src/view';
import { stringify } from '@angular/core/src/render3/util';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GithubService', () => {
  let githubService: GithubService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        GithubService,
      ]
    });
    githubService = TestBed.get(GithubService);
  });

  it('should be created', () => {
    expect(githubService).toBeTruthy();
  });

  describe('getTeamPullRequests()', () => {

    it('should return an Observable<Array<PullRequest>>', () => {
      const service: GithubService = TestBed.get(GithubService);
      service.getTeamPullRequests('LeanAgileFlowSoftware', 'test').subscribe((pullRequests) => {
      });
    });
  });
});
