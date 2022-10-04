import { TestBed } from '@angular/core/testing';

import { LengthConvertorService } from './length-convertor.service';

describe('LengthConvertorService', () => {
  let service: LengthConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LengthConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
