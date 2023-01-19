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
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },
    removeError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    filteredContacts(state, action)  {
      state.filter = action.payload
    }
  },
});

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
  filteredContacts,
} = contactsSlice.actions;

export const myReduser = contactsSlice.reducer;