import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPg3Component } from './test-pg3.component';

describe('TestPg3Component', () => {
  let component: TestPg3Component;
  let fixture: ComponentFixture<TestPg3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPg3Component]
    });
    fixture = TestBed.createComponent(TestPg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
