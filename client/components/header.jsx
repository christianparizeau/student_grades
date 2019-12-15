import React from 'react';

function Header(props) {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <h1>{props.text}</h1>
      <h3>
        Average Grade: <span className='badge badge-secondary'>{props.avgGrade}</span></h3>
    </div>
  );
}
export default Header;
