import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionLoginInformation } from '../interfaces';

@Component({
  selector: 'app-user-auth-stepper',
  templateUrl: './user-auth-stepper.component.html',
  styleUrls: ['./user-auth-stepper.component.css']
})
export class UserAuthStepperComponent implements OnInit {
  isLinear = true;
  isEditable = true;
  githubApiGroup: FormGroup;
  githubTokenGroup: FormGroup;
  usersGroup: FormGroup;
  githubApiDefault = 'https://api.github.com';

  @Output() userSettings: SessionLoginInformation;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // TODO: add better validators
    this.githubApiGroup = this._formBuilder.group({
      firstCtrl: ['https://api.github.com', Validators.required]
    });
    this.githubTokenGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.usersGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

}
