import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpskillYourselfComponent } from './upskill-yourself.component';

describe('UpskillYourselfComponent', () => {
  let component: UpskillYourselfComponent;
  let fixture: ComponentFixture<UpskillYourselfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpskillYourselfComponent]
    });
    fixture = TestBed.createComponent(UpskillYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
