/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Class } from '../models/Class';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClassService {
  /**
   * @returns Class All classes for school
   * @throws ApiError
   */
  public static classControllerFindAll({
    school,
  }: {
    school: string,
  }): CancelablePromise<Array<Class>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/class',
      query: {
        'school': school,
      },
    });
  }
  /**
   * @returns Class All classes for school
   * @throws ApiError
   */
  public static classControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<Array<Class>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/class/{id}',
      path: {
        'id': id,
      },
    });
  }
}
