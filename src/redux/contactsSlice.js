import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: contactInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.contacts.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    fetchingError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    postingInProgress(state) {
      state.contacts.isLoading = true;
    },
    postingSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.unshift(action.payload);
    },
    postingError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    removeInProgress(state) {
      state.contacts.isLoading = true;
    },
    removeSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.unshift(action.payload);
    },
    removeError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

// console.log(contactsSlice)

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  postingInProgress,
  postingSuccess,
  postingError,
  removeInProgress,
  removeSuccess,
  removeError,
} = contactsSlice.actions;
// export const { addContact, deleteContact, filteredContacts } =
//   contactsSlice.actions;
export const myReduser = contactsSlice.reducer;

// const tasksSlice = {
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// };

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
