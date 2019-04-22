import { Component, OnInit, Input } from '@angular/core';
import { UserSettingsService } from '../user-settings.service';
import { GithubService } from '../github.service';
import { UserSettings } from '../user-settings';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  @Input() public sessionInfo: UserSettings;

  constructor(private settingsService: UserSettingsService,
              private githubService: GithubService) { }

  ngOnInit() {
  }

  processSettings() {
    const userList = this.settingsService.getUserSettings().usersList;
    const users: string[] = userList.split(',');
    for(let user in users) {
      this.githubService.getPullRequests(user);
    }
  }

}
