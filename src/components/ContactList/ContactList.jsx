import { Ul } from './ContactList.styled';
import { ContactListItem } from "./ContactListItem";
import { useSelector} from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
    const items = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const getVisibleContacts = () => {
   const filteredContacts = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
  
};
    
    if(getVisibleContacts ===0) return null
    return (
        <Ul>
            {getVisibleContacts().map(item => {
                const { id } = item
                return (
                    < ContactListItem
                        key={id}
                    {...item}
                />)    
            })}
        </Ul>)
    }
    

    
