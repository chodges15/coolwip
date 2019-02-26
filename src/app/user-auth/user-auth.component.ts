import { Component, OnInit, Input } from '@angular/core';
import { SessionLoginInformation } from '../interfaces';
import { UserSettingsService } from '../user-settings.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  @Input() public sessionInfo: SessionLoginInformation;

  constructor(private settingsService: UserSettingsService) { }

  ngOnInit() {
  }

  processInput(settings: SessionLoginInformation) {
    this.settingsService.setUserSettings(settings);
  }

}
