import { TestBed, inject } from '@angular/core/testing';

import { OurHttpService } from './our-http.service';

describe('OurHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurHttpService]
    });
  });

  it('should be created', inject([OurHttpService], (service: OurHttpService) => {
    expect(service).toBeTruthy();
  }));
});
