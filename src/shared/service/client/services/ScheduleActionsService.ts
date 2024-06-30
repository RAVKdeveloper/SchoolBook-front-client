/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddEmptyStudentInScheduleDto } from '../models/AddEmptyStudentInScheduleDto';
import type { DaySchedule } from '../models/DaySchedule';
import type { RemoveEmptyStudentInScheduleDto } from '../models/RemoveEmptyStudentInScheduleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ScheduleActionsService {
  /**
   * @returns DaySchedule Return Schedule
   * @throws ApiError
   */
  public static sheduleActionsControllerFindAll({
    schoolId,
    classId,
    date,
  }: {
    /**
     * School id
     */
    schoolId: string,
    /**
     * Class id
     */
    classId: string,
    /**
     * Date
     */
    date: string,
  }): CancelablePromise<DaySchedule> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/shedule-actions',
      query: {
        'schoolId': schoolId,
        'classId': classId,
        'date': date,
      },
    });
  }
  /**
   * @returns any Add student to empty list
   * @throws ApiError
   */
  public static sheduleActionsControllerAddStudentsToEmptyList({
    requestBody,
  }: {
    requestBody: AddEmptyStudentInScheduleDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/shedule-actions/add/empty-students',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns any Add student to empty list
   * @throws ApiError
   */
  public static sheduleActionsControllerRemoveStudentsToEmptyList({
    requestBody,
  }: {
    requestBody: RemoveEmptyStudentInScheduleDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/shedule-actions/remove/empty-students',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
