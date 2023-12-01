import { selectFilter } from 'redux/selectors';
import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/createSlice';
import {useDispatch, useSelector } from 'react-redux';


export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
        return (
            <>
                <Label>find contact by name
                <Input type="text" 
                name='filter'
                value={filter}
                onChange={(e)  => dispatch(setFilter(e.target.value))}
                placeholder="Enter name for Search"
                    /></Label>
            </>
        )
    }
