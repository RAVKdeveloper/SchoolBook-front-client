import { FC } from "react";

import { getMeQuery } from "../logic/useLayout.model";

import type { LayoutWrapperProps } from "../interface/props.component.interface";

export const LayoutWrapper: FC<LayoutWrapperProps> = async ({ children }) => {
  const user = await getMeQuery();

  return (
    <>
      {JSON.stringify(user)}
      {children}
    </>
  );
};
