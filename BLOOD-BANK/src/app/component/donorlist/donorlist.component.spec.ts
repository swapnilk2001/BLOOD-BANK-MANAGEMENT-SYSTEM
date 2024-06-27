import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorlistComponent } from './donorlist.component';

describe('DonorlistComponent', () => {
  let component: DonorlistComponent;
  let fixture: ComponentFixture<DonorlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorlistComponent]
    });
    fixture = TestBed.createComponent(DonorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
