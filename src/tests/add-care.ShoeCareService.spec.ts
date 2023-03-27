import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ApiConfiguration } from '../app/api/api-configuration';
import { HttpClient } from '@angular/common/http';
import { ShoeCareService } from 'src/app/api/services';
import { NewShoeCare, ShoeCare } from 'src/app/api/models';

describe('ShoeCareService', () => {
  let service: ShoeCareService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoeCareService, ApiConfiguration, HttpClient],
    });

    service = TestBed.inject(ShoeCareService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#createShoeCare', () => {
    it('should create a new shoe care', () => {
      const dummyShoeCare: NewShoeCare = {
        brand: 'Faberlic',
        name: 'Spray',
        price: 1200,
      };

      service.addShoeCare({body: dummyShoeCare}).subscribe((shoeCare: ShoeCare) => {
        expect(shoeCare).toEqual(dummyShoeCare);
      });

      const req = httpMock.expectOne(`${service.rootUrl}/care`);
      expect(req.request.method).toBe('POST');
      req.flush(dummyShoeCare);
    });
  });
});
