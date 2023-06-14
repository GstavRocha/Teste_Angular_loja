import { TestBed } from '@angular/core/testing';

import { ProtudosService } from './protudos.service';

describe('ProtudosService', () => {
  let service: ProtudosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtudosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
