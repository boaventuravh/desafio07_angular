import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardDropdownComponent } from './dashboard-card-dropdown.component';

describe('DashboardCardDropdownComponent', () => {
  let component: DashboardCardDropdownComponent;
  let fixture: ComponentFixture<DashboardCardDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCardDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
