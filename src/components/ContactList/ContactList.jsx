import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import Contact from '../Contact/Contact';

export default function ContactList() {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  console.log(items);
  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filter);
  const normolizedFilter = filtered.toLowerCase();
  const filteredContacts = filtered
    ? items.filter(({ name }) => name.toLowerCase().includes(normolizedFilter))
    : items;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="ul">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items &&
        filteredContacts.map(contact => (
          <Contact key={contact.id} item={contact}></Contact>
        ))}
    </Box>
  );
}
