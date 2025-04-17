import { TestBed } from '@angular/core/testing';

import { EasytoastService } from './easytoast.service';

describe('EasytoastService', () => {
  let service: EasytoastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasytoastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
