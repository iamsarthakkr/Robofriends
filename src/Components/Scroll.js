import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
   //creating a scrollable container
   return <div className='scroll'>{props.children}</div>;
};

export default Scroll;
