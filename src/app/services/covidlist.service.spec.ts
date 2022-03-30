import { TestBed } from '@angular/core/testing';

import { CovidlistService } from './covidlist.service';

describe('CovidlistService', () => {
  let service: CovidlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
