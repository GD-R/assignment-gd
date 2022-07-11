import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import collectionsSlice from "../features/collectionsSlice";

const persistConfig = {
    key: 'localCollections',
    version: 1,
    storage,
  }

const persistedReducer = persistReducer(persistConfig, collectionsSlice)

const store = configureStore({
    reducer: { collections: persistedReducer },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store