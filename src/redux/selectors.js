// import { setFilter } from "./createSlice";
// import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.contacts.filter;

// export const selectVisibleContacts = createSelector(
//     [selectFilter, selectContacts],
//     (filter, items) => {
//         return items.filter((item) =>
//             item.name.toLowerCase().includes(filter.toLowerCase())
//         );
//     }
// );



