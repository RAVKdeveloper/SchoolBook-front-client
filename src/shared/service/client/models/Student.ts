/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type Student = {
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
   * Reference to user id
   */
  userId: User;
  /**
   * Is admit student for school
   */
  isAdmit: boolean;
  /**
   * School id
   */
  school: number;
  /**
   * Class student
   */
  class: number;
  /**
   * Points student
   */
  points: number;
  /**
   * Date of accession user in school
   */
  dateOfAccession: string;
};

