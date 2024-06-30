/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStudentDto } from '../models/CreateStudentDto';
import type { Student } from '../models/Student';
import type { UpdateStudentDto } from '../models/UpdateStudentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StudentService {
  /**
   * @returns Student Create student
   * @throws ApiError
   */
  public static studentControllerCreate({
    requestBody,
  }: {
    requestBody: CreateStudentDto,
  }): CancelablePromise<Student> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/student',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns Student All students for school
   * @throws ApiError
   */
  public static studentControllerFindAll({
    school,
  }: {
    school: string,
  }): CancelablePromise<Array<Student>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/student',
      query: {
        'school': school,
      },
    });
  }
  /**
   * @returns Student Get user
   * @throws ApiError
   */
  public static studentControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<Student> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/student/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Пользователь не найден`,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static studentControllerUpdate({
    id,
    requestBody,
  }: {
    id: string,
    requestBody: UpdateStudentDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/student/{id}',
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
  public static studentControllerRemove({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/student/{id}',
      path: {
        'id': id,
      },
    });
  }
}
