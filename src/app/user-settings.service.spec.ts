import { TestBed } from '@angular/core/testing';

import { UserSettingsService } from './user-settings.service';
import { SessionLoginInformation } from './interfaces';

describe('UserSettingsService', () => {
  let service: UserSettingsService;

  const testSettings: SessionLoginInformation = {
    github_api: 'test.github.com',
    github_token: 'abcd',
    list_of_users: 'bob, charlie'
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(UserSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should allow setting and retrieval of login information', () => {
    service.setUserSettings(testSettings);
    expect(service.getUserSettings() === testSettings);
  });
});
