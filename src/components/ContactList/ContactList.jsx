import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { Contact } from '../Contact/Contact';
import { Item } from './ContactListStyled';
import { getContacts, getError, getFilter } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { getIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const items = useSelector(getContacts);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    if (!filter) {
      return items;
    }
    const filteredContacts = items.filter(item => {
      const normolizedFilter = filter.toLowerCase();
      const normalizedName = item.name.toLowerCase();
      const result = normalizedName.includes(normolizedFilter);
      return result;
    });
    return filteredContacts;
  };
  const contacts = getFilterContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="ul">
      {loading && <Loader />}
      {error && <p>Something went wrong, please try again</p>}
      {items &&
        contacts.map(contact => (
          <Item key={contact.id}>
            <Contact item={contact}></Contact>
          </Item>
        ))}
    </Box>
  );
};
