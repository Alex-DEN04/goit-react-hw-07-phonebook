// import { useSelector } from 'react-redux';

import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { Title } from './components/Title/Title';
// import { getContacts, getIsLoading } from 'redux/selectors';

export const App = () => {
  return (
    <>
      <div>
        <Title title={'Phonebook'}></Title>
        <ContactForm></ContactForm>
        <Title title={'Contacts'}></Title>
        <Filter></Filter>
        <ContactList></ContactList>
      </div>
    </>
  );
};
