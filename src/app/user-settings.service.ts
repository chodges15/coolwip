import { Injectable } from '@angular/core';
import { SessionLoginInformation } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private settings: SessionLoginInformation;
  constructor() {
    this.settings = { github_api: undefined, github_token: undefined, list_of_users: undefined};
  }
  setUserSettings(settings: SessionLoginInformation) {
    this.settings = settings;
  }
  getUserSettings(): SessionLoginInformation {
    return this.settings;
  }
}
