import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

  describe('#getAllShoeCare', () => {
    it('should return an Observable<StrictHttpResponse<Array<Shoe>>>', () => {
      const dummyShoeCare: Shoe[] = [
        {
          id: 1,
          name: 'Shoe Polish',
          brand: 'Nike',
          price: 234,
          size: '43'
        },
        {
          id: 2,
          name: 'Shoe Polish',
          brand: 'Nike',
          price: 234,
          size: '42'
        },
      ];

      service.getAllShoes().subscribe((res) => {
        expect(res).toEqual(dummyShoeCare);
      });

      const req = httpMock.expectOne(`${service.rootUrl}/shoes`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyShoeCare);
    });
  });
});
