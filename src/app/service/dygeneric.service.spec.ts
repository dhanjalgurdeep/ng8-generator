import { TestBed, inject } from '@angular/core/testing';

import { DygenericService } from './dygeneric.service';

describe('DygenericService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DygenericService]
    });
  });

  it('should be created', inject([DygenericService], (service: DygenericService) => {
    expect(service).toBeTruthy();
  }));
});
