"use client";

import { FC } from "react";

import { Controller } from "react-hook-form";

import { useLoginForm } from "../logic/useLoginForm.model";

export const LoginFormFeature: FC = () => {
  const { control, handleSubmit, submit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Login Form</h1>
      <Controller
        control={control}
        name="email"
        render={({ field }) => {
          return <input {...field} placeholder="Email" />;
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          return <input {...field} placeholder="Password" />;
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
};
