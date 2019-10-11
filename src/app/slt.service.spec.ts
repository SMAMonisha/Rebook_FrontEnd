import { TestBed } from '@angular/core/testing';

import { SltService } from './slt.service';

describe('SltService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SltService = TestBed.get(SltService);
    expect(service).toBeTruthy();
  });
});
