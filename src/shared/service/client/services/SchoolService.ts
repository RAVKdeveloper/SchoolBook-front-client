/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { School } from '../models/School';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SchoolService {
  /**
   * @returns School Get all schools
   * @throws ApiError
   */
  public static schoolControllerFindAll(): CancelablePromise<Array<School>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/school',
    });
  }
  /**
   * @returns School Get school
   * @throws ApiError
   */
  public static schoolControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<School> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/school/{id}',
      path: {
        'id': id,
      },
    });
  }
}
