import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSettings } from '../user-settings';


@Component({
  selector: 'app-user-auth-stepper',
  templateUrl: './user-auth-stepper.component.html',
  styleUrls: ['./user-auth-stepper.component.css']
})
export class UserAuthStepperComponent implements OnInit {
  githubApiGroup: FormGroup;
  githubTokenGroup: FormGroup;
  usersGroup: FormGroup;
  githubApiDefault = 'https://api.github.com';

  @Output()
  userSettingsEvent: EventEmitter<UserSettings> = new EventEmitter();

  private userSettings: UserSettings;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // TODO: add better validators
    this.githubApiGroup = this._formBuilder.group({
      firstCtrl: [this.githubApiDefault, Validators.required]
    });
    this.githubTokenGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.usersGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.userSettings = new UserSettings();
    this.onApiChange(this.githubApiDefault);
  }

  onApiChange(api: string) {
    this.userSettings.githubApi = api;
  }

  onTokenChange(token: string) {
    this.userSettings.githubToken = token;
  }

  onUserChange(users: string) {
    this.userSettings.usersList = users;
  }

  onVerify() {
    console.log(JSON.stringify(this.userSettings));
    this.userSettingsEvent.emit(this.userSettings);
  }

}
