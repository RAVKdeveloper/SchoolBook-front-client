/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Teacher = {
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
   * Is admit user
   */
  isAdmit: boolean;
  /**
   * Lead class
   */
  userId: number;
  /**
   * School id
   */
  school: number;
  /**
   * Teacher lessons
   */
  lessons: number;
  /**
   * Opening times
   */
  OpeningTimes: string;
  /**
   * Chief to class
   */
  class: Array<string>;
};

