import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiConfiguration } from '../app/api/api-configuration';
import { HttpClient } from '@angular/common/http';
import { ShoeCareService } from 'src/app/api/services';
import { ShoeCare } from 'src/app/api/models';

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

  describe('#updateShoeCareById', () => {
    it('should update an existing shoe care', () => {
      const dummyShoeCare: ShoeCare = {
        id: 123,
        brand: 'Faberlic',
        name: 'Spray',
        price: 1200,
      };

      const updatedShoeCare: ShoeCare = {
        id: 123,
        brand: 'Nike',
        name: 'Shoe Cleaner',
        price: 1500,
      };

      service.updateShoeCareById({ id: dummyShoeCare.id!, body: updatedShoeCare }).subscribe((shoeCare: ShoeCare) => {
        expect(shoeCare).toEqual(updatedShoeCare);
      });

      const req = httpMock.expectOne(`${service.rootUrl}/care/${dummyShoeCare.id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(updatedShoeCare);
    });
  });
});