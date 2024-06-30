/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Lesson } from '../models/Lesson';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LessonService {
  /**
   * @returns Lesson Get all lessons in the school
   * @throws ApiError
   */
  public static lessonsControllerFindAll({
    id,
  }: {
    id: string,
  }): CancelablePromise<Array<Lesson>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/lessons/all',
      query: {
        'id': id,
      },
    });
  }
  /**
   * @returns Lesson Get one teacher
   * @throws ApiError
   */
  public static lessonsControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<Lesson> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/lessons/{id}',
      path: {
        'id': id,
      },
    });
  }
}
