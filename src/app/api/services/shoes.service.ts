/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NewShoe } from '../models/new-shoe';
import { Shoe } from '../models/shoe';
import { UpdateShoe } from '../models/update-shoe';

@Injectable({
  providedIn: 'root',
})
export class ShoesService extends BaseService {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllShoes
   */
  static readonly GetAllShoesPath = '/shoes';

  /**
   * Get all shoes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllShoes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllShoes$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Shoe>>> {

    const rb = new RequestBuilder(this.rootUrl, ShoesService.GetAllShoesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Shoe>>;
      })
    );
  }

  /**
   * Get all shoes.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllShoes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllShoes(params?: {
  },
  context?: HttpContext

): Observable<Array<Shoe>> {

    return this.getAllShoes$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Shoe>>) => r.body as Array<Shoe>)
    );
  }

  /**
   * Path part for operation addShoe
   */
  static readonly AddShoePath = '/shoes';

  /**
   * Add a new shoe.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addShoe()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addShoe$Response(params: {
    body: NewShoe
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Shoe>> {

    const rb = new RequestBuilder(this.rootUrl, ShoesService.AddShoePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Shoe>;
      })
    );
  }

  /**
   * Add a new shoe.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addShoe$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addShoe(params: {
    body: NewShoe
  },
  context?: HttpContext

): Observable<Shoe> {

    return this.addShoe$Response(params,context).pipe(
      map((r: StrictHttpResponse<Shoe>) => r.body as Shoe)
    );
  }

  /**
   * Path part for operation getShoeById
   */
  static readonly GetShoeByIdPath = '/shoes/{id}';

  /**
   * Get a shoe by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShoeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoeById$Response(params: {

    /**
     * The ID of the shoe to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Shoe>> {

    const rb = new RequestBuilder(this.rootUrl, ShoesService.GetShoeByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Shoe>;
      })
    );
  }

  /**
   * Get a shoe by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getShoeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoeById(params: {

    /**
     * The ID of the shoe to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<Shoe> {

    return this.getShoeById$Response(params,context).pipe(
      map((r: StrictHttpResponse<Shoe>) => r.body as Shoe)
    );
  }

  /**
   * Path part for operation updateShoeById
   */
  static readonly UpdateShoeByIdPath = '/shoes/{id}';

  /**
   * Update a shoe by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateShoeById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateShoeById$Response(params: {

    /**
     * The ID of the shoe to retrieve or update
     */
    id: number;
    body: UpdateShoe
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Shoe>> {

    const rb = new RequestBuilder(this.rootUrl, ShoesService.UpdateShoeByIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Shoe>;
      })
    );
  }

  /**
   * Update a shoe by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateShoeById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateShoeById(params: {

    /**
     * The ID of the shoe to retrieve or update
     */
    id: number;
    body: UpdateShoe
  },
  context?: HttpContext

): Observable<Shoe> {

    return this.updateShoeById$Response(params,context).pipe(
      map((r: StrictHttpResponse<Shoe>) => r.body as Shoe)
    );
  }

  /**
   * Path part for operation deleteShoeById
   */
  static readonly DeleteShoeByIdPath = '/shoes/{id}';

  /**
   * Delete a shoe by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteShoeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShoeById$Response(params: {

    /**
     * The ID of the shoe to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShoesService.DeleteShoeByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete a shoe by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteShoeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShoeById(params: {

    /**
     * The ID of the shoe to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteShoeById$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
