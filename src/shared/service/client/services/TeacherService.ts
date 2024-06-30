/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Teacher } from '../models/Teacher';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TeacherService {
  /**
   * @returns Teacher All teachers
   * @throws ApiError
   */
  public static teacherControllerFindAll(): CancelablePromise<Array<Teacher>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/teacher',
    });
  }
  /**
   * @returns Teacher Teachers this school
   * @throws ApiError
   */
  public static teacherControllerFindOneAllThisSchool({
    id,
  }: {
    id: string,
  }): CancelablePromise<Array<Teacher>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/teacher/all',
      query: {
        'id': id,
      },
    });
  }
  /**
   * @returns Teacher Get teacher
   * @throws ApiError
   */
  public static teacherControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<Teacher> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/teacher/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Учитель не найден`,
      },
    });
  }
}
