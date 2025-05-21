import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "src/redux/counter/counterSlice";
import langReducer from "src/redux/lang/langSlice";
import signupReducer from "src/redux/signup/signupSlice";
import loginReducer from "src/redux/login/loginSlice";
import userReducer from "src/redux/userProfile/userProfileSlice";
import adminReducer from "src/redux/admin/adminSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  counter: counterReducer,
  language: langReducer,
  signup: signupReducer,
  login: loginReducer,
  user: userReducer,
  admin:adminReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
