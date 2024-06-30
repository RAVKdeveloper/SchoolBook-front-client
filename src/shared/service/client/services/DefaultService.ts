/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePortfolioDto } from '../models/CreatePortfolioDto';
import type { CreateUserDto } from '../models/CreateUserDto';
import type { UpdatePortfolioDto } from '../models/UpdatePortfolioDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
  /**
   * @returns any
   * @throws ApiError
   */
  public static prometheusControllerIndex(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/metrics',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static userControllerCreate({
    requestBody,
  }: {
    requestBody: CreateUserDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/user',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static userControllerFindAll(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/user',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static userControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/user/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static userControllerUpdate({
    id,
    requestBody,
  }: {
    id: string,
    requestBody: UpdateUserDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/user/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static userControllerRemove({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/user/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static portfolioControllerCreate({
    requestBody,
  }: {
    requestBody: CreatePortfolioDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/portfolio',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static portfolioControllerFindAll(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/portfolio',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static portfolioControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/portfolio/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static portfolioControllerUpdate({
    id,
    requestBody,
  }: {
    id: string,
    requestBody: UpdatePortfolioDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/portfolio/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static portfolioControllerRemove({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/portfolio/{id}',
      path: {
        'id': id,
      },
    });
  }
}
