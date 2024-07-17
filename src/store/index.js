import { configureStore } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

/******  LOCAL STORAGE PATH***/
// import storage from 'redux-persist/lib/storage';

import storage from 'redux-persist/lib/storage/session';
import invoiceReducer from './invoiceSlice';

const persistConfig = {
   key: 'root',
   storage,
};

const persistedReducer = persistReducer(persistConfig, invoiceReducer);

const store = configureStore({
   reducer: {
      invoice: persistedReducer, // invoice is the name of the slice
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

const persistor = persistStore(store);

export { store, persistor };

/***** IN CASE OF MULTIPLE SLICES, USE COMBINED REDUCERS *****/
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// const rootReducer = combineReducers({
//    invoice: invoiceReducer,
//    //user: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//    reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// store.subscribe(() => {
//    console.log("Store state:", store.getState());
// });

// export { store, persistor };
