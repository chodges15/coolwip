import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthComponent } from './user-auth.component';
import { UserSettingsService } from '../user-settings.service';
import { SessionLoginInformation } from '../interfaces';
import { UserAuthStepperComponent } from '../user-auth-stepper/user-auth-stepper.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';


describe('UserAuthComponent', () => {
  let component: UserAuthComponent;
  let fixture: ComponentFixture<UserAuthComponent>;
  let spySettings: jasmine.SpyObj<UserSettingsService>;
  const dummySettings: SessionLoginInformation = {github_api: 'github.company.com', github_token: '123', list_of_users: 'user1, user2'};

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('UserSettingsService', ['setUserSettings']);
    TestBed.configureTestingModule({
      declarations: [ UserAuthComponent, UserAuthStepperComponent],
      imports: [ MatStepperModule,
                 ReactiveFormsModule,
                 MatFormFieldModule,
                 MatInputModule,
                 MatCardModule,
                 BrowserAnimationsModule ],
      providers: [ {provide: UserSettingsService, useValue: spy} ]
    })
    .compileComponents();
    spySettings = TestBed.get(UserSettingsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should handle passing the settings to the UserSettingsService', () => {
    component.processInput(dummySettings);
    expect(spySettings.setUserSettings).toHaveBeenCalledWith(dummySettings);
  });
});
