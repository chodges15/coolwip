import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { UserAuthStepperComponent } from './user-auth-stepper.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserSettings } from '../user-settings';

describe('UserAuthStepperComponent', () => {
  let component: UserAuthStepperComponent;
  let fixture: ComponentFixture<UserAuthStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatStepperModule,
                 ReactiveFormsModule,
                 MatFormFieldModule,
                 MatInputModule,
                 MatCardModule,
                 BrowserAnimationsModule ],
      declarations: [ UserAuthStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle settings input', () => {
    let actualSettings: UserSettings;
    const expectedSettings = new UserSettings('dummyApi', 'dummyToken', 'dummyUsers');
    component.onApiChange('dummyApi');
    component.onTokenChange('dummyToken');
    component.onUserChange('dummyUsers');
    component.userSettingsEvent.subscribe((value) => actualSettings = value);
    component.onVerify();

    expect(actualSettings.githubApi).toBe(expectedSettings.githubApi);
    expect(actualSettings.githubToken).toBe(expectedSettings.githubToken);
    expect(actualSettings.usersList).toBe(expectedSettings.usersList);
  });
});
