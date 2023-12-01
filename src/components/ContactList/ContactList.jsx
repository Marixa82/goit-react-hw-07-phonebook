import { Ul } from './ContactList.styled';
import { ContactListItem } from "./ContactListItem";
import { useSelector} from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
     const getVisibleContacts = useSelector(selectVisibleContacts);
    if(getVisibleContacts ===0) return null
    return (
        <Ul>
            {getVisibleContacts.map(item => {
                const { id } = item
                return (
                    < ContactListItem
                        key={id}
                    {...item}
                />)    
            })}
        </Ul>)
    }
    

    
