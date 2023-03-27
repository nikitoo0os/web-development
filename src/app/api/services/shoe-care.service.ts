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

import { NewShoeCare } from '../models/new-shoe-care';
import { ShoeCare } from '../models/shoe-care';
import { UpdateShoeCare } from '../models/update-shoe-care';

@Injectable({
  providedIn: 'root',
})
export class ShoeCareService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllShoeCare
   */
  static readonly GetAllShoeCarePath = '/care';

  /**
   * Get all shoe care.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllShoeCare()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllShoeCare$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ShoeCare>>> {

    const rb = new RequestBuilder(this.rootUrl, ShoeCareService.GetAllShoeCarePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ShoeCare>>;
      })
    );
  }

  /**
   * Get all shoe care.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllShoeCare$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllShoeCare(params?: {
  },
  context?: HttpContext

): Observable<Array<ShoeCare>> {

    return this.getAllShoeCare$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ShoeCare>>) => r.body as Array<ShoeCare>)
    );
  }

  /**
   * Path part for operation addShoeCare
   */
  static readonly AddShoeCarePath = '/care';

  /**
   * Add a new shoe care.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addShoeCare()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addShoeCare$Response(params: {
    body: NewShoeCare
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ShoeCare>> {

    const rb = new RequestBuilder(this.rootUrl, ShoeCareService.AddShoeCarePath, 'post');
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
        return r as StrictHttpResponse<ShoeCare>;
      })
    );
  }

  /**
   * Add a new shoe care.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addShoeCare$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addShoeCare(params: {
    body: NewShoeCare
  },
  context?: HttpContext

): Observable<ShoeCare> {

    return this.addShoeCare$Response(params,context).pipe(
      map((r: StrictHttpResponse<ShoeCare>) => r.body as ShoeCare)
    );
  }

  /**
   * Path part for operation getShoeCareById
   */
  static readonly GetShoeCareByIdPath = '/care/{id}';

  /**
   * Get a shoe care by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShoeCareById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoeCareById$Response(params: {

    /**
     * The ID of the shoe are to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ShoeCare>> {

    const rb = new RequestBuilder(this.rootUrl, ShoeCareService.GetShoeCareByIdPath, 'get');
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
        return r as StrictHttpResponse<ShoeCare>;
      })
    );
  }

  /**
   * Get a shoe care by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getShoeCareById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShoeCareById(params: {

    /**
     * The ID of the shoe are to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<ShoeCare> {

    return this.getShoeCareById$Response(params,context).pipe(
      map((r: StrictHttpResponse<ShoeCare>) => r.body as ShoeCare)
    );
  }

  /**
   * Path part for operation updateShoeCareById
   */
  static readonly UpdateShoeCareByIdPath = '/care/{id}';

  /**
   * Update a shoe care by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateShoeCareById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateShoeCareById$Response(params: {

    /**
     * The ID of the shoe are to retrieve or update
     */
    id: number;
    body: UpdateShoeCare
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ShoeCare>> {

    const rb = new RequestBuilder(this.rootUrl, ShoeCareService.UpdateShoeCareByIdPath, 'put');
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
        return r as StrictHttpResponse<ShoeCare>;
      })
    );
  }

  /**
   * Update a shoe care by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateShoeCareById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateShoeCareById(params: {

    /**
     * The ID of the shoe are to retrieve or update
     */
    id: number;
    body: UpdateShoeCare
  },
  context?: HttpContext

): Observable<ShoeCare> {

    return this.updateShoeCareById$Response(params,context).pipe(
      map((r: StrictHttpResponse<ShoeCare>) => r.body as ShoeCare)
    );
  }

  /**
   * Path part for operation deleteShoeCareById
   */
  static readonly DeleteShoeCareByIdPath = '/care/{id}';

  /**
   * Delete a shoe care by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteShoeCareById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShoeCareById$Response(params: {

    /**
     * The ID of the shoe are to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShoeCareService.DeleteShoeCareByIdPath, 'delete');
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
   * Delete a shoe care by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteShoeCareById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShoeCareById(params: {

    /**
     * The ID of the shoe are to retrieve or update
     */
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteShoeCareById$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
