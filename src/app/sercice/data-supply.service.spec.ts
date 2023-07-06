import { TestBed } from '@angular/core/testing';

import { DataSupplyService } from './data-supply.service';

describe('DataSupplyService', () => {
  let service: DataSupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
