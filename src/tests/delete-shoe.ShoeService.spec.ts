import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { ShoeCare, UpdateShoeCare } from 'src/app/api/models';
import { ShoeCareService, ShoesService } from 'src/app/api/services';

describe('ShoeService', () => {
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

  describe('#deleteShoe', () => {
    it('should delete a shoe ', () => {
      const dummyShoe: ShoeCare = {
        id: 1,
        brand: 'Nike',
        price: 1200,
        name: 'Spray',
      };

      service.deleteShoeById({ id: dummyShoe.id! }).subscribe(() => {
        expect(null).toEqual(null);
      });

      const req = httpMock.expectOne(
        `${service.rootUrl}/shoes/${dummyShoe.id}`
      );
      expect(req.request.method).toBe('DELETE');
      req.flush(dummyShoe);
    });
  });
});
