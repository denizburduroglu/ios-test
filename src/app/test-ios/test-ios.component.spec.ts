import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIOSComponent } from './test-ios.component';

describe('TestIOSComponent', () => {
  let component: TestIOSComponent;
  let fixture: ComponentFixture<TestIOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestIOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
