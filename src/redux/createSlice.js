import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './createContacts';

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;

                const index = state.contacts.items.findIndex(
                    item => item.id === action.payload
                );
                state.contacts.items.splice(index, 1);
            })
            .addMatcher(action => action.type.endsWith('/pending'),
                (state) => {
                    state.contacts.isLoading = true;
                    state.contacts.error = null;
                }).addMatcher(action => action.type.endsWith('/rejected'),
                    (state, action) => {
                        state.contacts.isLoading = false;
                        state.contacts.error = action.error;
                    })
    },
});
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


