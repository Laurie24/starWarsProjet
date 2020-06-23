import { TestBed } from '@angular/core/testing';

import { LoggeurService } from './loggeur.service';

describe('LoggeurService', () => {
  let service: LoggeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
