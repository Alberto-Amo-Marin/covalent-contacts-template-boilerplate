import { TestBed } from '@angular/core/testing';

import { LayoutScreenService } from './layout-screen.service';

describe('LayoutScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutScreenService = TestBed.get(LayoutScreenService);
    expect(service).toBeTruthy();
  });
});
