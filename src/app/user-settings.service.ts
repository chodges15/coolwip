import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private settings: UserSettings;
  constructor(private authService: UserAuth) {
    this.settings = new UserSettings();
  }
  setUserSettings(settings: UserSettings) {
    this.settings = settings;
  }
  getUserSettings(): UserSettings {
    return this.settings;
  }
}
