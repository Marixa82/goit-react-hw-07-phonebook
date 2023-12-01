import {  useEffect } from 'react';
import { Div } from './App.styled';
import ContactForm from 'components/ContactForm';
import {ContactList} from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch} from 'react-redux'
import { fetchContacts} from 'redux/createContacts';
import {  selectError, selectIsLoading } from 'redux/selectors';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
       dispatch(fetchContacts());
      }, [ dispatch]);
 
 
  return (
    <Div>
   <h1>Phonebook</h1>
     <ContactForm   />
  <h2>Contacts</h2>
      <Filter/>
      {isLoading && !error && <b>Request in progress...</b>}
     <ContactList />
         </Div>
  )
  }


