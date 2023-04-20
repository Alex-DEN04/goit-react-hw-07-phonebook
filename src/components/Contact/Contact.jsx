import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from './Contact.styled';
import { Loader } from 'components/Loader/Loader';

export const Contact = ({ item: { id, name, phone } }) => {
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  return (
    <>
      {name}: {phone}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        {loading ? <Loader/> : <span>Delete</span>}
      </Button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
