/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type School = {
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
   * School name
   */
  name: string;
  /**
   * School name
   */
  avatarUrl: string;
  /**
   * School location
   */
  location: string;
  /**
   * License registration number
   */
  licenseNumber: string;
  /**
   * License image
   */
  licenseImg: string;
  /**
   * Owner id
   */
  owner: number;
  /**
   * Points system in school
   */
  pointsSystem: string;
  /**
   * School IP address
   */
  ip: string;
  /**
   * Students id
   */
  students: number;
  /**
   * Teachers id
   */
  teachers: number;
  lessons: number;
  classes: number;
  /**
   * Region from this school
   */
  region: string;
  /**
   * Is activated school
   */
  IsActivated: boolean;
  /**
   * Is blocked school
   */
  blocked: boolean;
};

