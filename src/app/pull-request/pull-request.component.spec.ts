import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubService } from '../github.service';
import { PullRequestComponent } from './pull-request.component';
import { Observable, of } from 'rxjs';
import * as MockData from '../mock-github-service-data';
import * as Interfaces from '../interfaces';

// Mocks
class MockGithubService {
  getPullRequests(user: String): Observable<Interfaces.PullRequest[]> {
    console.log('Fetching pull requests');
    return of(MockData.ISSUE_SEARCH.items[0].pull_request[0]);
  }
}

describe('PullRequestComponent', () => {
  let component: PullRequestComponent;
  let fixture: ComponentFixture<PullRequestComponent>;
  let serviceFixture: GithubService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRequestComponent ],
      providers:  [ {provide: GithubService, useClass: MockGithubService },
                    {provide: Array, useValue: ['user1', 'user2']}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestComponent);
    component = fixture.componentInstance;
    component.users = ['user1', 'user2'];
    serviceFixture = TestBed.get(GithubService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

