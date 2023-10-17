import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactsReducer } from './createSlice';
import { filterReducer } from './createFilterSlice';






export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
            },
        }),
});

