import React, { useInsertionEffect } from "react";
import { Provider } from "react-redux";
import { useInit } from "./hooks/useInit";
import store, { useAppSelector } from "./store";

export function rootContainer(root: any) {

  return <Provider store={store}>{root}</Provider>;
}
