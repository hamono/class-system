import { configureStore } from '@reduxjs/toolkit';
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import courseSlice from './features/courseSlice';
import userSlice from './features/userSlice';

const store = configureStore({
  reducer: {
    userSlice,
    courseSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = fn => useSelector(fn, shallowEqual);

export default store;