import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return(
        <>
            <h3 className='pad-20 is-slategrey'>The page does not exist.</h3>
            <NavLink className='a2 pad-20' to='/'>Back to home page</NavLink>
        </>
    );
}

