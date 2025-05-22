import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsDetailModalComponent } from './complaints-detail-modal.component';

describe('ComplaintsDetailModalComponent', () => {
  let component: ComplaintsDetailModalComponent;
  let fixture: ComponentFixture<ComplaintsDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsDetailModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
