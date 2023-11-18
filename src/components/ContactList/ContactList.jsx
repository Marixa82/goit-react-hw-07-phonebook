import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';
import {ContactListItem} from "./ContactListItem";

export const ContactList = ({ items, delContact }) => {
    if(items.length===0) return null
    return (
        <Ul>
            {items.map(item => {
                const { id } = item
                return (
                    < ContactListItem
                        key={id}
                    {...item}
                delContact={delContact} />)    
            })}
            
            
         </Ul>)
    }
    

    ContactList.propTypes = {
    items: PropTypes.array.isRequired,
    delContact: PropTypes.func.isRequired,
 }
