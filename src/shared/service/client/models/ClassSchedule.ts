/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ClassSchedule = {
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
   * Class schedule is the top week?
   */
  isTheTopWeek: boolean;
  /**
   * Days this week
   */
  days: number;
  /**
   * Class
   */
  class: number;
  currentWeek: number;
  year: string;
  /**
   * Timeline start this week
   */
  timelineStart: string;
  /**
   * Timeline end this week
   */
  timelineEnd: string;
};

