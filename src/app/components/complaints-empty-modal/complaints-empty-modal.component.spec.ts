import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsEmptyModalComponent } from './complaints-empty-modal.component';

describe('ComplaintsEmptyModalComponent', () => {
  let component: ComplaintsEmptyModalComponent;
  let fixture: ComponentFixture<ComplaintsEmptyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsEmptyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsEmptyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
