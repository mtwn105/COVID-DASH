import { TestBed } from '@angular/core/testing';

import { CovidWorldStatsService } from './covid-world-stats.service';

describe('CovidWorldStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidWorldStatsService = TestBed.get(CovidWorldStatsService);
    expect(service).toBeTruthy();
  });
});
