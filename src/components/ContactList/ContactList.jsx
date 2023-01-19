import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const { items, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const getFilterContacts = () => {
    if (!filter) {
      return items;
    } 
    const filteredContacts = items.filter(item => {
      const normolizedFilter = filter.toLowerCase();
      const normalizedName = item.name.toLowerCase();
      const result = normalizedName.includes(normolizedFilter)
    return result;
    });
    return filteredContacts;
    
  }
  const contacts = getFilterContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="ul">
      {error && <p>{error}</p>}
      {items &&
        contacts.map(contact => (
          <Contact key={contact.id} item={contact}></Contact>
        ))}
    </Box>
  );
}
