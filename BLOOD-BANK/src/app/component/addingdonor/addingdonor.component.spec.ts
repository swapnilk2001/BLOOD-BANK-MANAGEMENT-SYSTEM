import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingdonorComponent } from './addingdonor.component';

describe('AddingdonorComponent', () => {
  let component: AddingdonorComponent;
  let fixture: ComponentFixture<AddingdonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingdonorComponent]
    });
    fixture = TestBed.createComponent(AddingdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
