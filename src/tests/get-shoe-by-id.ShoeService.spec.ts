import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ShoeCareService } from '../app/api/services/shoe-care.service';
import { ApiConfiguration } from '../app/api/api-configuration';
import { ShoeCare } from 'src/app/api/models/shoe-care';
import { HttpClient } from '@angular/common/http';
import { Shoe } from 'src/app/api/models';
import { ShoesService } from 'src/app/api/services';

describe('ShoeCareService', () => {
  let service: ShoesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoeCareService, ApiConfiguration, HttpClient],
    });

    service = TestBed.inject(ShoesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getShoeById', () => {
    it('should return an Observable<StrictHttpResponse<Shoe>>', () => {
      const dummyShoe: Shoe = {
        id: 1,
        name: 'Shoe Brush',
        brand: 'Nike',
        price: 234,
        size: '43'
      };

      service.getShoeById({ id: dummyShoe.id! }).subscribe((shoe) => {
        expect(shoe).toEqual(dummyShoe);       
      });

      const req = httpMock.expectOne(`${service.rootUrl}/shoes/${dummyShoe.id}` );
      expect(req.request.method).toBe('GET');
      req.flush(dummyShoe);
    });
  });
});
