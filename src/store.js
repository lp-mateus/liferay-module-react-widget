import { configureStore } from '@reduxjs/toolkit';
import formUserReducer from "./features/formUserSlice";

const store = configureStore({
  reducer: {
    formUser: formUserReducer,
  },
});

export default store;
