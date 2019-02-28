import { Component, OnInit, Input } from '@angular/core';
import { SessionLoginInformation } from '../interfaces';
import { UserSettingsService } from '../user-settings.service';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  @Input() public sessionInfo: SessionLoginInformation;

  constructor(private settingsService: UserSettingsService,
              private githubService: GithubService) { }

  ngOnInit() {
  }

  processSettings(settings: SessionLoginInformation) {
    this.settingsService.setUserSettings(settings);
  }

}
