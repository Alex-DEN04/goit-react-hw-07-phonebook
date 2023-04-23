import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { Button } from './Contact.styled';

export const Contact = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <>
      {name}: {phone}
      <Button
        type="button"
        name="deleteButton"
        onClick={() => dispatch(deleteContact(id))}
      >
        {' '}
        <span>Delete</span>
      </Button>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};
