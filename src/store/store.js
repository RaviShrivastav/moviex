import { configureStore } from '@reduxjs/toolkit'
import homeSlcie from './homeSlcie';

export const store = configureStore({
  reducer: {
    home: homeSlcie,
},
});
