import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorsStandingsTableComponent } from './constructors-standings-table.component';

describe('ConstructorsStandingsTableComponent', () => {
  let component: ConstructorsStandingsTableComponent;
  let fixture: ComponentFixture<ConstructorsStandingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorsStandingsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorsStandingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
