import { Button, Input, Label, Form} from "./ContactForm.styled";
import {  useState } from "react";
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/createContacts";


export default function ContactForm () {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
 const handelCheckUniqueContact = (name) => {
   const isNameContact = !!contacts.find((item) => item.name.toLowerCase() === name.toLowerCase());
    isNameContact && alert(`${name} is already in items`)
    return !isNameContact
  }
  const handleChangeForm = event => {
  const {name, value} = event.target
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'phone':
      setPhone(value);
      break;
    default:
      return;
  }
  }
  const id = nanoid();
  
  const handelSubmit = (e) => {
  e.preventDefault();
    const isValidatedForm = validateForm();

  if (isValidatedForm) {
    dispatch(addContact({ id, name, phone }));
    resetForm();
    }
  else {
    resetForm();
    }
};

  const resetForm = () => {
    setName('');
    setPhone('');
} 

const validateForm = () => {
    if (!name || !phone) {
    alert('Some field is empty');
    return false;
  }
  return handelCheckUniqueContact(name);
};

  return (
    <Form onSubmit={handelSubmit} autoComplete="off">
      <Label htmlFor={id}>
        Name<Input
          type="text"
      name='name'
      value={name}
      placeholder="Enter contact name"
      onChange={handleChangeForm}
      id={id}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required />
      </Label>
      <Label htmlFor=""> Number
        <Input
          type="tel"
      name='phone'
      value={phone}
      placeholder="Enter contact number"
      onChange={handleChangeForm}
      pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
        /></Label>
      <Button type='submit'>Add contact</Button>
    </Form>
  );

}







