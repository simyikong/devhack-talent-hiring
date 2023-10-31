import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentDashboardPageComponent } from './talent-dashboard-page.component';

describe('TalentDashboardPageComponent', () => {
  let component: TalentDashboardPageComponent;
  let fixture: ComponentFixture<TalentDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentDashboardPageComponent]
    });
    fixture = TestBed.createComponent(TalentDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
