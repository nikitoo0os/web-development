import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { ShoeCare, UpdateShoeCare } from 'src/app/api/models';
import { ShoeCareService } from 'src/app/api/services';

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

  describe('#deleteShoeCare', () => {
    it('should delete a shoe care', () => {
      const dummyShoeCare: ShoeCare = {
        id: 1,
        brand: 'Nike',
        price: 1200,
        name: 'Spray',
      };

      service.deleteShoeCareById({ id: dummyShoeCare.id! }).subscribe(() => {
        expect(null).toEqual(null);
      });

      const req = httpMock.expectOne(
        `${service.rootUrl}/care/${dummyShoeCare.id}`
      );
      expect(req.request.method).toBe('DELETE');
      req.flush(dummyShoeCare);
    });
  });
});
