import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversStandingsTableComponent } from './drivers-standings-table.component';

describe('DriversStandingsTableComponent', () => {
  let component: DriversStandingsTableComponent;
  let fixture: ComponentFixture<DriversStandingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversStandingsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversStandingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
