import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GithubService } from '../github.service';
import { BaseUrlInterceptor } from './base-url-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import * as Interfaces from '../interfaces';
import * as MockData from '../mock-github-service-data';

describe(`BaseUrlInterceptor`, () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GithubService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BaseUrlInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(GithubService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should add the base URL', () => {
    const testUrl = 'http://testUrl';
    const testData: Interfaces.IssueSearchResult = MockData.ISSUE_SEARCH;
    localStorage.setItem('baseUrl', testUrl);
    service.getPullRequests('test').subscribe(
      response => expect(response).toBeTruthy(),
      err => fail('Received error')
    );
    const httpRequest = httpMock.expectOne(
      req => req.method === 'GET' &&
      req.url === `${testUrl}/search/issues?q=type:pr+author:test`);
  });
});
