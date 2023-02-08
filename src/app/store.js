import { configureStore } from '@reduxjs/toolkit';
import { animalsReducer } from '../features/animals/animalSlice';

export const store = configureStore({
  reducer: {
    animals: animalsReducer
  },
});
