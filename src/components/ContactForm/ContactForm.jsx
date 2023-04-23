import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { getContacts } from 'redux/selectors';
import {
  FormStyled,
  Input,
  ErrorMessageStyled,
  ErrorText,
  Label,
  Button,
} from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessageStyled
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().min(4).max(10).required(),
});

export const ContactForm = () => {
  const items = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    resetForm();

    const existsName = items.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (existsName) {
      return alert(`${values.name} is already in contacts`);
    }

    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>Name</Label>
        <Input type="text" name="name" />
        <FormError name="name" />

        <Label>Number</Label>
        <Input type="tel" name="phone" />
        <FormError name="phone" />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};
