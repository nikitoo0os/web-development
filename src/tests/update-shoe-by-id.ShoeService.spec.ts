import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiConfiguration } from '../app/api/api-configuration';
import { HttpClient } from '@angular/common/http';
import { ShoeCareService, ShoesService } from 'src/app/api/services';
import { Shoe } from 'src/app/api/models';

describe('ShoesService', () => {
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

  describe('#updateShoeById', () => {
    it('should update an existing shoe', () => {
      const dummyShoe: Shoe = {
        id: 123,
        brand: 'Faberlic',
        name: 'Spray',
        price: 1200,
        size: '43'
      };

      const updatedShoe: Shoe = {
        id: 123,
        brand: 'Nike',
        name: 'Shoe Cleaner',
        price: 1500,
        size: '44'
      };

      service.updateShoeById({ id: dummyShoe.id!, body: updatedShoe }).subscribe((shoe: Shoe) => {
        expect(shoe).toEqual(updatedShoe);
      });

      const req = httpMock.expectOne(`${service.rootUrl}/shoes/${dummyShoe.id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(updatedShoe);
    });
  });
});