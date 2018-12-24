import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubService } from '../github.service';
import { PullRequest } from '../pull-request';
import { PullRequestComponent } from './pull-request.component';
import { Observable, of } from 'rxjs';
import { MOCK_PULL_REQUESTS } from "../mock-pull-requests"

describe('PullRequestComponent', () => {
  let component: PullRequestComponent;
  let fixture: ComponentFixture<PullRequestComponent>;
  let serviceFixture: GithubService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRequestComponent ],
      providers:  [ {provide: GithubService, useClass: MockGithubService },
                    {provide: String, useValue: "dummy"},
                    {provide: Array, useValue: ["user1", "user2"]}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestComponent);
    component = fixture.componentInstance;
    serviceFixture = TestBed.get(GithubService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockGithubService {
  getPullRequests(organization: String, users: String): Observable<PullRequest[]> {
    console.log("Fetching pull requests")
    return of(MOCK_PULL_REQUESTS);
  }
};