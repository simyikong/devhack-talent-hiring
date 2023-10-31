import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedResumeComponent } from './automated-resume.component';

describe('AutomatedResumeComponent', () => {
  let component: AutomatedResumeComponent;
  let fixture: ComponentFixture<AutomatedResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomatedResumeComponent]
    });
    fixture = TestBed.createComponent(AutomatedResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
