import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesStatsComponent } from './all-countries-stats.component';

describe('AllCountriesStatsComponent', () => {
  let component: AllCountriesStatsComponent;
  let fixture: ComponentFixture<AllCountriesStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCountriesStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
