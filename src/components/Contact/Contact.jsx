import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';

import { deleteContact } from '../../redux/operations';
import { Item, Button } from './Contact.styled';
// import { MutatingDots } from  'react-loader-spinner'

export default function Contact({ item }) {
  const dispatch = useDispatch();
  return (
    <Item>
      {item.name}: {item.phone}
      <Button type="button" onClick={() => dispatch(deleteContact(item.id))}>
        Delete
        
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};
