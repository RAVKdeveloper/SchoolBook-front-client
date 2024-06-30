/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassSchedule } from '../models/ClassSchedule';
import type { CreateClassScheduleDto } from '../models/CreateClassScheduleDto';
import type { CreateDaySchedulerDto } from '../models/CreateDaySchedulerDto';
import type { RemoveDayInScheduleDto } from '../models/RemoveDayInScheduleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClassScheduleService {
  /**
   * @returns ClassSchedule Create class-schedule
   * @throws ApiError
   */
  public static classScheduleControllerCreate({
    requestBody,
  }: {
    requestBody: CreateClassScheduleDto,
  }): CancelablePromise<ClassSchedule> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/class-schedule',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns ClassSchedule Get all class-schedules
   * @throws ApiError
   */
  public static classScheduleControllerFindAll({
    classId,
  }: {
    classId: string,
  }): CancelablePromise<Array<ClassSchedule>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/class-schedule',
      query: {
        'classId': classId,
      },
    });
  }
  /**
   * @returns any Create new day schedule
   * @throws ApiError
   */
  public static classScheduleControllerAddNewDaySchedule({
    requestBody,
  }: {
    requestBody: CreateDaySchedulerDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/class-schedule/add-new-day',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any Remove day in schedule
   * @throws ApiError
   */
  public static classScheduleControllerRemoveDayInSchedule({
    requestBody,
  }: {
    requestBody: RemoveDayInScheduleDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/class-schedule/remove-day',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns ClassSchedule Get one class-schedule
   * @throws ApiError
   */
  public static classScheduleControllerFindOne({
    id,
  }: {
    id: string,
  }): CancelablePromise<ClassSchedule> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/class-schedule/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `Расписание не найдено`,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static classScheduleControllerRemove({
    id,
  }: {
    id: string,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/class-schedule/{id}',
      path: {
        'id': id,
      },
    });
  }
}
