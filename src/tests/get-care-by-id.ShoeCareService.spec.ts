import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ShoeCareService } from '../app/api/services/shoe-care.service';
import { ApiConfiguration } from '../app/api/api-configuration';
import { ShoeCare } from 'src/app/api/models/shoe-care';
import { HttpClient } from '@angular/common/http';

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

  describe('#getShoeCareById', () => {
    it('should return an Observable<StrictHttpResponse<ShoeCare>>', () => {
      const dummyShoeCare: ShoeCare = {
        id: 1,
        name: 'Shoe Brush',
        brand: 'Nike',
        price: 234,
      };

      service.getShoeCareById({ id: dummyShoeCare.id! }).subscribe((shoeCare) => {
        expect(shoeCare).toEqual(dummyShoeCare);       
      });

      const req = httpMock.expectOne(`${service.rootUrl}/care/${dummyShoeCare.id}` );
      expect(req.request.method).toBe('GET');
      req.flush(dummyShoeCare);
    });
  });
});
