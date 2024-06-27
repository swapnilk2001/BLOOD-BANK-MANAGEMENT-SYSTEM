import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REGISTERComponent } from './register.component';

describe('REGISTERComponent', () => {
  let component: REGISTERComponent;
  let fixture: ComponentFixture<REGISTERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [REGISTERComponent]
    });
    fixture = TestBed.createComponent(REGISTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
