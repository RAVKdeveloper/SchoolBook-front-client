/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePointSystemDto } from '../models/CreatePointSystemDto';
import type { Point } from '../models/Point';
import type { UpdatePointSystemDto } from '../models/UpdatePointSystemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PointSystemService {
  /**
   * @returns Point Create point
   * @throws ApiError
   */
  public static pointSystemControllerCreate({
    requestBody,
  }: {
    requestBody: CreatePointSystemDto,
  }): CancelablePromise<Point> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/point-system',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns Point Find all this school points
   * @throws ApiError
   */
  public static pointSystemControllerFindAllSchool({
    schoolId,
  }: {
    schoolId: string,
  }): CancelablePromise<Array<Point>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/point-system',
      query: {
        'schoolId': schoolId,
      },
    });
  }
  /**
   * @returns Point Find all this class points
   * @throws ApiError
   */
  public static pointSystemControllerFindAllClass({
    schoolId,
    classId,
  }: {
    /**
     * School id
     */
    schoolId: string,
    /**
     * Class id
     */
    classId: string,
  }): CancelablePromise<Array<Point>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/point-system/class',
      query: {
        'schoolId': schoolId,
        'classId': classId,
      },
    });
  }
  /**
   * @returns Point Find one point
   * @throws ApiError
   */
  public static pointSystemControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<Point> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/point-system/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Оценка не найдена`,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static pointSystemControllerUpdate({
    requestBody,
  }: {
    requestBody: UpdatePointSystemDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/point-system/{id}',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static pointSystemControllerRemove({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/point-system/{id}',
      path: {
        'id': id,
      },
    });
  }
}
