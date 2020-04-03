import { TestBed } from '@angular/core/testing';

import { CovidIndiaStatsService } from './covid-india-stats.service';

describe('CovidIndiaStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidIndiaStatsService = TestBed.get(CovidIndiaStatsService);
    expect(service).toBeTruthy();
  });
});
