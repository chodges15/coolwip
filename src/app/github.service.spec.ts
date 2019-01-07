import { TestBed } from '@angular/core/testing';
import * as Octokit from '@octokit/rest';
import { GithubService, IssueSearchResult } from './github.service';
import { tokenKey } from '@angular/core/src/view';
import { stringify } from '@angular/core/src/render3/util';
import * as mockIssueJsonResponse from './github-issue-search-result.json';

describe('GithubService', () => {
  let githubService: GithubService;
  let octokitSpy: jasmine.SpyObj<Octokit>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('octokit',
    {
      'authenticate' : function(any) { },
      'search' : {
        'issues' : function(any) { return new Promise(res => setTimeout(res, 0)); }
      }
    });

    console.log(spy);
    TestBed.configureTestingModule({
      providers: [
        GithubService,
        { provide: Octokit, use: spy },
        { provide: 'githubToken', useValue: '06b44a41abf1fce37f2aee6570bb46b46c05bdf8' },
      ]
    });
    githubService = TestBed.get(GithubService);
    octokitSpy = TestBed.get(Octokit);
  });

  it('should be created', () => {
    expect(githubService).toBeTruthy();
  });

  describe('getTeamPullRequests()', () => {

    it('should return an Observable<Array<PullRequest>>', () => {
      const service: GithubService = TestBed.get(GithubService);
      service.getTeamPullRequests('LeanAgileFlowSoftware', 'test').subscribe((pullRequests) => {
        const response: Octokit.Response<IssueSearchResult> = pullRequests;
        expect(response.data.items.length).toBe(2);
        expect(response.data.items[0].id).toEqual('1');
        expect(response.data.items[1].id).toEqual('2');
      });
    });
  });
});
