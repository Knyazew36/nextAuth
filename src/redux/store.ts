import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: {
    authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
