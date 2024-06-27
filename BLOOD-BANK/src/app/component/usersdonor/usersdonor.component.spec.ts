import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdonorComponent } from './usersdonor.component';

describe('UsersdonorComponent', () => {
  let component: UsersdonorComponent;
  let fixture: ComponentFixture<UsersdonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersdonorComponent]
    });
    fixture = TestBed.createComponent(UsersdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
