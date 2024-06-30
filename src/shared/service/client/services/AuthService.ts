/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAuthDto } from '../models/CreateAuthDto';
import type { ForgotPassDto } from '../models/ForgotPassDto';
import type { LoginAuthDto } from '../models/LoginAuthDto';
import type { UpdatePasswordDto } from '../models/UpdatePasswordDto';
import type { User } from '../models/User';
import type { VerifyCodeDto } from '../models/VerifyCodeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
  /**
   * @returns User User created
   * @throws ApiError
   */
  public static authControllerRegistration({
    requestBody,
  }: {
    requestBody: CreateAuthDto,
  }): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/auth/register',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Пользователь с таким emаil уже существует`,
      },
    });
  }
  /**
   * @returns User User successful login
   * @throws ApiError
   */
  public static authControllerLogin({
    requestBody,
  }: {
    requestBody: LoginAuthDto,
  }): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/auth/login',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Неверный логин или пароль`,
      },
    });
  }
  /**
   * @returns User Userdata
   * @throws ApiError
   */
  public static authControllerMe(): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/auth/me',
      errors: {
        403: `Акаунт не активирован`,
        404: `Пользователь не найден`,
      },
    });
  }
  /**
   * @returns User Возвращает пользователя
   * @throws ApiError
   */
  public static authControllerForgotPass({
    requestBody,
  }: {
    requestBody: ForgotPassDto,
  }): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/auth/forgotPass',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Пользователь не найден`,
      },
    });
  }
  /**
   * @returns any Verify account
   * @throws ApiError
   */
  public static authControllerVerifyAccount({
    requestBody,
  }: {
    requestBody: VerifyCodeDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/auth/verify',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Неверный код доступа`,
      },
    });
  }
  /**
   * @returns any Пароль изменён
   * @throws ApiError
   */
  public static authControllerPasswordUpdate({
    requestBody,
  }: {
    requestBody: UpdatePasswordDto,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/auth/updatePass',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Неверный код доступа`,
        404: `Такого пользователя не существует`,
      },
    });
  }
  /**
   * @returns any Delete cookie
   * @throws ApiError
   */
  public static authControllerLogout(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/auth/logout',
      errors: {
        403: `Нет токена`,
      },
    });
  }
}
