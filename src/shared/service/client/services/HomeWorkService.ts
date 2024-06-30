/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateHomeWorkDto } from '../models/CreateHomeWorkDto';
import type { HomeWork } from '../models/HomeWork';
import type { UpdateHomeWorkDto } from '../models/UpdateHomeWorkDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HomeWorkService {
  /**
   * @returns HomeWork Create home work
   * @throws ApiError
   */
  public static homeWorkControllerCreate({
    requestBody,
  }: {
    requestBody: CreateHomeWorkDto,
  }): CancelablePromise<HomeWork> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/home-work',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns HomeWork Get homeworks
   * @throws ApiError
   */
  public static homeWorkControllerFindAll({
    classId,
    dateFrom,
    dateTo,
    lessonId,
  }: {
    /**
     * Class id
     */
    classId: number,
    /**
     * Date from
     */
    dateFrom?: string,
    /**
     * Date to
     */
    dateTo?: string,
    /**
     * Lesson id
     */
    lessonId?: Array<string>,
  }): CancelablePromise<Array<HomeWork>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/home-work',
      query: {
        'classId': classId,
        'dateFrom': dateFrom,
        'dateTo': dateTo,
        'lessonId': lessonId,
      },
    });
  }
  /**
   * @returns HomeWork Get home work bu ID
   * @throws ApiError
   */
  public static homeWorkControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<HomeWork> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/home-work/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static homeWorkControllerUpdate({
    id,
    requestBody,
  }: {
    id: string,
    requestBody: UpdateHomeWorkDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/home-work/{id}',
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
  public static homeWorkControllerRemove({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/home-work/{id}',
      path: {
        'id': id,
      },
    });
  }
}
