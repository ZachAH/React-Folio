import React from 'react';
import '../Header/style.css';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Zachary Howell</h1>
      {props.children}
    </header>


  );
}

export default Header;
