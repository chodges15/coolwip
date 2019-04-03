import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { UserAuthStepperComponent } from './user-auth-stepper.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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

  fit('should handle settings input', () => {
    let api: string;
    component.onApiChange('dummyApi');
    component.userSettingsEvent.subscribe((value) => api = value);

    const stepHeaders = fixture.debugElement.queryAll(By.css('.mat-horizontal-stepper-header'));

    // input the API
    const apiInputEl = fixture.debugElement.query(By.css('mat-input-element')).nativeElement;

    // select the first step
    const stepHeaderEl = stepHeaders[3].nativeElement;
    stepHeaderEl.click();
    fixture.detectChanges();

    // click submit
    const submitButton = fixture.debugElement.query(By.css('mat-raised-button')).nativeElement;
    submitButton.click();
    fixture.detectChanges();

    expect(api).toBe('dummyApi');
  });
});
