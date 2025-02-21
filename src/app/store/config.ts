import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import localforage from 'localforage';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import { api } from '@/app/api';
import { isDev } from '@/app/configs';
import { middlewares } from '@/app/middleware';
import { authSlice } from '@/entities/user';

const persistConfig = {
  key: 'another_root',
  storage: localforage,
  version: 0,
  blacklist: ['api'],
  stateReconciler: autoMergeLevel2
};

export const rootReducer = () => {
  return combineReducers({
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer
  });
};
//TODO: workaround <never, never>, check better solution (minor)
const persistedReducer = persistReducer<never, never>(persistConfig, rootReducer());

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middlewares),
  devTools: isDev
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
