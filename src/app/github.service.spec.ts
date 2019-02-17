import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
import { tokenKey } from '@angular/core/src/view';
import { stringify } from '@angular/core/src/render3/util';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as Interfaces from './interfaces';


describe('GithubService', () => {
  let githubService: GithubService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClientTestingModule,
        GithubService,
      ]
    });
    githubService = TestBed.get(GithubService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(githubService).toBeTruthy();
  });

  describe('getPullRequests()', () => {

    it('should return an Observable<IssueSearchResult>', () => {
      const service: GithubService = TestBed.get(GithubService);
      service.getPullRequests('test').subscribe(
        data => expect(data).toBeTruthy(),
        error => fail('Expected valid data, but got an error' + error.message)
      );
      const req = httpTestingController.expectOne('/search/issues?q=type:pr+author:test');
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });
    it('should retrieve a valid search result with multiple results', () => {
      const service: GithubService = TestBed.get(GithubService);
      service.getPullRequests('test').subscribe(
        data => expect(data).toBeTruthy(),
        error => fail('Expected valid data')
      );
      const req = httpTestingController.expectOne('/search/issues?q=type:pr+author:test');
      expect(req.request.method).toEqual('GET');
      req.flush(issueSearchMock);
    });
  });
});
