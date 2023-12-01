import { Li, Span,Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/createContacts';

export const ContactListItem = ({ id, name, phone}) => {
    const dispatch = useDispatch()
        return (
        <Li>
           <Span>{name}</Span> : <Span>{phone}</Span>
            <Button type="button" onClick={()=> dispatch(deleteContact(id))}>Delete</Button>
        </Li>
    )
}
