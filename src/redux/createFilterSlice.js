import { createSlice } from '@reduxjs/toolkit';

const initialState = '';


const createFilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:
    {
        setFilter(_, action) {
            return action.payload;
        },
    },
})
export const { setFilter } = createFilterSlice.actions;
export const filterReducer = createFilterSlice.reducer;