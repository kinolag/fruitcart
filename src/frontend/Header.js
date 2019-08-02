import React from 'react';
// import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <div className='pad-20  bg-349'>
            <h3 className='is-fc0'>
                The FruitCart. Mixing apples with oranges. 
                {/* <NavLink to='/' className='a2'>Home</NavLink> */}
            </h3>
            <p className='pad-10 is-white'>A test application built with React</p>
        </div>
    );
}