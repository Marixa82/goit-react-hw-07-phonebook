// import { setFilter } from "./createSlice";
// import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

// export const selectVisibleContacts = createSelector(
//     [selectFilter, selectContacts],
//     (filter, items) => {
//         return items.filter((item) =>
//             item.name.toLowerCase().includes(filter.toLowerCase())
//         );
//     }
// );



