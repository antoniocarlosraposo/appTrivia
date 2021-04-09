import { configureStore } from '@reduxjs/toolkit';
import triviaReducer from './trivia';

export const rootStore = configureStore({
  reducer: {
    trivia: triviaReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
