import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPg1Component } from './test-pg1.component';

describe('TestPg1Component', () => {
  let component: TestPg1Component;
  let fixture: ComponentFixture<TestPg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPg1Component]
    });
    fixture = TestBed.createComponent(TestPg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
