import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubService } from '../github.service';
import { PullRequestComponent } from './pull-request.component';
import { Observable, of } from 'rxjs';
import * as MockData from '../mock-github-service-data';
import * as Interfaces from '../interfaces';

describe('PullRequestComponent', () => {
  let component: PullRequestComponent;
  let fixture: ComponentFixture<PullRequestComponent>;
  let githubServiceSpy: jasmine.SpyObj<GithubService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('GithubService', ['getPullRequests']);
    TestBed.configureTestingModule({
      providers:  [  PullRequestComponent,
                     {provide: GithubService, useValue: spy } ]
    });
    component = TestBed.get(PullRequestComponent);
    githubServiceSpy = TestBed.get(GithubService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should allow a valid array of users to be set', () => {
    githubServiceSpy.getPullRequests.and.returnValue(of(MockData.ISSUE_SEARCH));
    expect(component.setUsersAndFetchPullRequests(['user1', 'user2'])).toBeTruthy();
    expect(githubServiceSpy.getPullRequests).toHaveBeenCalledTimes(2);
  });
  it('should not allow an invalid array of users to be set', () => {
    githubServiceSpy.getPullRequests.and.returnValue(MockData.ISSUE_SEARCH);
    expect(component.setUsersAndFetchPullRequests([""])).toBe(true);
    expect(githubServiceSpy.getPullRequests).toHaveBeenCalledTimes(0);
  });
});

