import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  postingInProgress,
  postingSuccess,
  postingError,
  removeInProgress,
  removeSuccess,
  removeError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://63c27790b0c286fbe5ee1d8c.mockapi.io/contacts';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    //   const data = JSON.stringify(response.data)
    dispatch(fetchingSuccess(response.data));
    //   console.log(response.data)
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
export const addContact = value => async dispatch => {
  try {
    dispatch(postingInProgress());
    const response = await axios.post('/contacts', value);
    dispatch(postingSuccess(response.data));
  } catch (e) {
    dispatch(postingError(e.message));
  }
};
export const deleteContact = id => async dispatch => {
  try {
    dispatch(removeInProgress());
    await axios.delete(`/contacts/${id}`);
    // console.log(id);
    // console.log(response);
    dispatch(removeSuccess(id));
  } catch (e) {
    dispatch(removeError(e.message));
  }
};
