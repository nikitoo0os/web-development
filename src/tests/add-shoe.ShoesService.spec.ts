import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { Shoe } from 'src/app/api/models';
import { ShoesService } from 'src/app/api/services';

describe('ShoesService', () => {
  let service: ShoesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoesService, ApiConfiguration, HttpClient],
    });

    service = TestBed.inject(ShoesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#addShoe', () => {
    it('should add a new shoe', () => {
      const dummyShoe: Shoe = {
        brand: 'Nike',
        name: 'AirMax',
        price: 149.99,
        size: '43',
      };

      service.addShoe({ body: dummyShoe }).subscribe((shoe) => {
        expect(shoe).toEqual(dummyShoe);
      });

      const req = httpMock.expectOne(`${service.rootUrl}/shoes`);
      expect(req.request.method).toBe('POST');
      req.flush(dummyShoe);
    });
  });
});
