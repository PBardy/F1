import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRaceTableComponent } from './last-race-table.component';

describe('LastRaceTableComponent', () => {
  let component: LastRaceTableComponent;
  let fixture: ComponentFixture<LastRaceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastRaceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRaceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
