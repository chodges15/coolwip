import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';

import { UserAuthStepperComponent } from './user-auth-stepper.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
});
