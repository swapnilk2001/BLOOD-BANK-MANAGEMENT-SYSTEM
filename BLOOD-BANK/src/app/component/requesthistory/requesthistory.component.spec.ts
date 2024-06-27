import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesthistoryComponent } from './requesthistory.component';

describe('RequesthistoryComponent', () => {
  let component: RequesthistoryComponent;
  let fixture: ComponentFixture<RequesthistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequesthistoryComponent]
    });
    fixture = TestBed.createComponent(RequesthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
