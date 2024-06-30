/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DaySchedule = {
  /**
   * Entity id
   */
  id: number;
  /**
   * Entity creatAt
   */
  createAt: string;
  /**
   * Entity updateAt
   */
  updateAt: string;
  /**
   * Active teachers this day
   */
  activeTeachers: number;
  /**
   * Empty this day students
   */
  emptyStudents: number;
  /**
   * This lesson in the day
   */
  lessons: number;
  /**
   * This points in the day
   */
  points: number;
  schedule: number;
  /**
   * Home works
   */
  homeWorks: Array<number>;
  /**
   * Day week name
   */
  dayName: string;
  time: string;
  /**
   * Date
   */
  date: string;
};

