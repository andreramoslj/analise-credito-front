import { TestBed } from '@angular/core/testing';

import { AnaliseCreditoService } from './analiseCredito.service';

describe('AnaliseCreditoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnaliseCreditoService = TestBed.get(AnaliseCreditoService);
    expect(service).toBeTruthy();
  });
});
