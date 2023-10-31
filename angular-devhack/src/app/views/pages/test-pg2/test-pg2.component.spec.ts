import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPg2Component } from './test-pg2.component';

describe('TestPg2Component', () => {
  let component: TestPg2Component;
  let fixture: ComponentFixture<TestPg2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPg2Component]
    });
    fixture = TestBed.createComponent(TestPg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
