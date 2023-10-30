import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentDiscoveryComponent } from './talent-discovery.component';

describe('TalentDiscoveryComponent', () => {
  let component: TalentDiscoveryComponent;
  let fixture: ComponentFixture<TalentDiscoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentDiscoveryComponent]
    });
    fixture = TestBed.createComponent(TalentDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
