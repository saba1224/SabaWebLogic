import { TestBed } from '@angular/core/testing';

import { MyCompService } from './my-comp.service';

describe('MyCompService', () => {
  let service: MyCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
